import type { AIProvider, GenerateResult } from '@/lib/ai-types';

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

/** Default cap keeps free/low-balance OpenRouter accounts from failing ("can only afford N tokens"). Override via OPENROUTER_MAX_TOKENS. */
function openRouterMaxTokens(): number {
  const raw = process.env.OPENROUTER_MAX_TOKENS?.trim();
  if (raw) {
    const n = parseInt(raw, 10);
    if (Number.isFinite(n) && n >= 256) return Math.min(n, 32768);
  }
  return 8192;
}

/** Vision-capable models on OpenRouter (prefix = provider). Order = preference. */
export const OPENROUTER_MODEL_CHAIN: { modelId: string; displayName: string }[] = [
  { modelId: 'google/gemini-2.5-flash', displayName: 'OpenRouter · Gemini 2.5 Flash' },
  { modelId: 'google/gemini-2.0-flash-001', displayName: 'OpenRouter · Gemini 2.0 Flash' },
  { modelId: 'openai/gpt-4o-mini', displayName: 'OpenRouter · GPT-4o mini' },
];

function refererHeader(): string {
  return (
    process.env.OPENROUTER_HTTP_REFERER?.trim() ||
    process.env.NEXT_PUBLIC_BASE_URL?.trim() ||
    'http://localhost:3000'
  );
}

export class OpenRouterProvider implements AIProvider {
  readonly id: string;
  readonly name: string;
  private readonly modelId: string;

  constructor(modelId: string, displayName: string) {
    this.modelId = modelId;
    this.name = displayName;
    this.id = `openrouter:${modelId}`;
  }

  isAvailable(): boolean {
    return !!process.env.OPENROUTER_API_KEY?.trim();
  }

  async generate(imageBuffer: Buffer, prompt: string): Promise<GenerateResult> {
    const apiKey = process.env.OPENROUTER_API_KEY?.trim();
    if (!apiKey) {
      throw new Error('OPENROUTER_API_KEY not configured');
    }

    const base64 = imageBuffer.toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64}`;
    const enhancedPrompt = `${prompt}

IMPORTANT: You must generate a complete, functional React component. Do not provide explanations or partial code. Every JSX string must be properly closed.`;

    const res = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': refererHeader(),
        'X-Title': 'sstocode',
      },
      body: JSON.stringify({
        model: this.modelId,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: enhancedPrompt },
              { type: 'image_url', image_url: { url: dataUrl } },
            ],
          },
        ],
        temperature: 0.5,
        max_tokens: openRouterMaxTokens(),
      }),
    });

    const raw = await res.text();
    if (!res.ok) {
      let msg = `OpenRouter HTTP ${res.status}`;
      try {
        const j = JSON.parse(raw) as { error?: { message?: string }; message?: string };
        msg = j?.error?.message || j?.message || msg;
      } catch {
        msg = `${msg}: ${raw.slice(0, 400)}`;
      }
      throw new Error(msg);
    }

    let json: {
      choices?: Array<{
        message?: { content?: string | null };
        finish_reason?: string | null;
      }>;
    };
    try {
      json = JSON.parse(raw) as typeof json;
    } catch {
      throw new Error('OpenRouter returned invalid JSON');
    }

    const text = json.choices?.[0]?.message?.content;
    const finishReason = json.choices?.[0]?.finish_reason ?? undefined;

    if (!text || typeof text !== 'string' || text.trim().length < 10) {
      throw new Error('OpenRouter returned empty or very short response');
    }

    return { text, finishReason: finishReason ?? undefined };
  }
}

/** Streaming chat completions (SSE) for `/api/generate-stream`. */
export async function streamOpenRouterCompletion(
  modelId: string,
  imageBuffer: Buffer,
  prompt: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY not configured');
  }

  const base64 = imageBuffer.toString('base64');
  const dataUrl = `data:image/jpeg;base64,${base64}`;
  const enhancedPrompt = `${prompt}

IMPORTANT: You must generate a complete, functional React component. Do not provide explanations or partial code.`;

  const res = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': refererHeader(),
      'X-Title': 'sstocode',
    },
    body: JSON.stringify({
      model: modelId,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: enhancedPrompt },
            { type: 'image_url', image_url: { url: dataUrl } },
          ],
        },
      ],
      temperature: 0.1,
      max_tokens: openRouterMaxTokens(),
      stream: true,
    }),
  });

  if (!res.ok) {
    const raw = await res.text();
    let msg = `OpenRouter HTTP ${res.status}`;
    try {
      const j = JSON.parse(raw) as { error?: { message?: string }; message?: string };
      msg = j?.error?.message || j?.message || msg;
    } catch {
      msg = `${msg}: ${raw.slice(0, 400)}`;
    }
    throw new Error(msg);
  }

  const reader = res.body?.getReader();
  if (!reader) {
    throw new Error('OpenRouter returned no stream body');
  }

  const decoder = new TextDecoder();
  let lineBuffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (value) {
      lineBuffer += decoder.decode(value, { stream: true });
    }
    const lines = lineBuffer.split('\n');
    lineBuffer = done ? '' : lines.pop() ?? '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data: ')) continue;
      const data = trimmed.slice(6);
      if (data === '[DONE]') continue;
      try {
        const j = JSON.parse(data) as {
          choices?: Array<{ delta?: { content?: string | null } }>;
        };
        const c = j.choices?.[0]?.delta?.content;
        if (c) onChunk(c);
      } catch {
        // ignore malformed SSE JSON fragments
      }
    }

    if (done) break;
  }
}
