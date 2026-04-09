import type { AIProvider, GenerateResult } from '@/lib/ai-types';

const MISTRAL_URL = 'https://api.mistral.ai/v1/chat/completions';

/** Vision-capable Mistral models (Pixtral / multimodal). Order = preference. */
export const MISTRAL_MODEL_CHAIN: { modelId: string; displayName: string }[] = [
  { modelId: 'pixtral-12b-2409', displayName: 'Mistral · Pixtral 12B' },
  { modelId: 'pixtral-large-latest', displayName: 'Mistral · Pixtral Large' },
];

export class MistralProvider implements AIProvider {
  readonly id: string;
  readonly name: string;
  private readonly modelId: string;

  constructor(modelId: string, displayName: string) {
    this.modelId = modelId;
    this.name = displayName;
    this.id = `mistral:${modelId}`;
  }

  isAvailable(): boolean {
    return !!process.env.MISTRAL_API_KEY?.trim();
  }

  async generate(imageBuffer: Buffer, prompt: string): Promise<GenerateResult> {
    const apiKey = process.env.MISTRAL_API_KEY?.trim();
    if (!apiKey) {
      throw new Error('MISTRAL_API_KEY not configured');
    }

    const base64 = imageBuffer.toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64}`;
    const enhancedPrompt = `${prompt}

IMPORTANT: You must generate a complete, functional React component. Do not provide explanations or partial code. Every JSX string must be properly closed.`;

    const res = await fetch(MISTRAL_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.modelId,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: enhancedPrompt },
              { type: 'image_url', image_url: dataUrl },
            ],
          },
        ],
        temperature: 0.5,
        max_tokens: 16384,
      }),
    });

    const raw = await res.text();
    if (!res.ok) {
      let msg = `Mistral HTTP ${res.status}`;
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
      throw new Error('Mistral returned invalid JSON');
    }

    const text = json.choices?.[0]?.message?.content;
    const finishReason = json.choices?.[0]?.finish_reason ?? undefined;

    if (!text || typeof text !== 'string' || text.trim().length < 10) {
      throw new Error('Mistral returned empty or very short response');
    }

    return { text, finishReason: finishReason ?? undefined };
  }
}

/** Streaming chat completions (SSE) for `/api/generate-stream`. */
export async function streamMistralCompletion(
  modelId: string,
  imageBuffer: Buffer,
  prompt: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const apiKey = process.env.MISTRAL_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('MISTRAL_API_KEY not configured');
  }

  const base64 = imageBuffer.toString('base64');
  const dataUrl = `data:image/jpeg;base64,${base64}`;
  const enhancedPrompt = `${prompt}

IMPORTANT: You must generate a complete, functional React component. Do not provide explanations or partial code.`;

  const res = await fetch(MISTRAL_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: modelId,
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: enhancedPrompt },
            { type: 'image_url', image_url: dataUrl },
          ],
        },
      ],
      temperature: 0.1,
      max_tokens: 16384,
      stream: true,
    }),
  });

  if (!res.ok) {
    const raw = await res.text();
    let msg = `Mistral HTTP ${res.status}`;
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
    throw new Error('Mistral returned no stream body');
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
