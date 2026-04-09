import { GoogleGenerativeAI } from '@google/generative-ai';
import { shouldRetryGeneration } from '@/lib/code-validation';
import type { AIProvider, GenerateResult } from '@/lib/ai-types';
import { MISTRAL_MODEL_CHAIN, MistralProvider } from '@/lib/mistral-provider';
import { OPENROUTER_MODEL_CHAIN, OpenRouterProvider } from '@/lib/openrouter-provider';

export type { AIProvider, GenerateResult } from '@/lib/ai-types';

const TRANSIENT_GEMINI =
  /503|429|Service Unavailable|UNAVAILABLE|high demand|overloaded|RESOURCE_EXHAUSTED|temporarily|try again later|Too Many Requests|ECONNRESET|ETIMEDOUT|fetch failed/i;

const FATAL_GEMINI = /API key not configured|401|403|PERMISSION_DENIED|API_KEY_INVALID|invalid api key/i;

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

export function isTransientGeminiError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  if (FATAL_GEMINI.test(msg)) return false;
  return TRANSIENT_GEMINI.test(msg);
}

function shouldAbortImmediately(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  return FATAL_GEMINI.test(msg);
}

/** Wrong model id / deprecated name — skip retries and try next model in chain */
function isModelNotAvailableError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  return /404|NOT_FOUND|not found|is not found|invalid model|Unknown model name/i.test(msg);
}

const RETRY_SUFFIX = `

CRITICAL — OUTPUT RULES (must follow):
1. Output ONE complete file only. Every string must end with its closing quote " or '.
2. Do NOT break className or any string in the middle of a word or class name.
3. If many Tailwind classes are needed, use multiple lines or shorten the design — never truncate mid-attribute.
4. End with: closing ); for return, closing }; for the component, then export default ComponentName;
5. If you cannot fit everything, simplify the UI (fewer divs) but keep valid syntax.`;

// Gemini — one instance per model id (fallback chain when a tier is overloaded)
class GeminiProvider implements AIProvider {
  readonly id: string;
  readonly name: string;
  private readonly modelId: string;
  private client: GoogleGenerativeAI;

  constructor(modelId: string, displayName: string) {
    this.modelId = modelId;
    this.name = displayName;
    this.id = `gemini:${modelId}`;
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  }

  isAvailable(): boolean {
    return !!process.env.GEMINI_API_KEY;
  }

  async generate(imageBuffer: Buffer, prompt: string): Promise<GenerateResult> {
    const base64 = imageBuffer.toString('base64');
    const model = this.client.getGenerativeModel({
      model: this.modelId,
      generationConfig: {
        temperature: 0.5,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 16384,
      },
    });

    const enhancedPrompt = `${prompt}

IMPORTANT: You must generate a complete, functional React component. Do not provide explanations or partial code. Every JSX string must be properly closed.`;

    const result = await model.generateContent([
      enhancedPrompt,
      { inlineData: { mimeType: 'image/jpeg', data: base64 } },
    ]);

    const response = result.response;
    const text = response.text();
    const finishReason = response.candidates?.[0]?.finishReason;

    if (finishReason) {
      console.log('Gemini finishReason:', finishReason);
    }

    if (!text || text.trim().length < 10) {
      throw new Error('Gemini returned empty or very short response');
    }

    return { text, finishReason };
  }
}

const GEMINI_MODEL_CHAIN: { modelId: string; displayName: string }[] = [
  { modelId: 'gemini-2.5-flash', displayName: 'Gemini 2.5 Flash' },
  { modelId: 'gemini-2.0-flash', displayName: 'Gemini 2.0 Flash' },
  { modelId: 'gemini-1.5-flash', displayName: 'Gemini 1.5 Flash' },
];

const TRANSIENT_ATTEMPTS = 3;

// AI Manager: direct Gemini first when GEMINI_API_KEY is set (same path as original app — best UI/code quality),
// then OpenRouter, then Mistral as fallbacks / extras.
export class AIManager {
  private providers: AIProvider[];

  constructor() {
    this.providers = this.buildProviders();
  }

  private buildProviders(): AIProvider[] {
    const list: AIProvider[] = [];
    if (process.env.GEMINI_API_KEY?.trim()) {
      for (const c of GEMINI_MODEL_CHAIN) {
        list.push(new GeminiProvider(c.modelId, c.displayName));
      }
    }
    if (process.env.OPENROUTER_API_KEY?.trim()) {
      for (const c of OPENROUTER_MODEL_CHAIN) {
        list.push(new OpenRouterProvider(c.modelId, c.displayName));
      }
    }
    if (process.env.MISTRAL_API_KEY?.trim()) {
      for (const c of MISTRAL_MODEL_CHAIN) {
        list.push(new MistralProvider(c.modelId, c.displayName));
      }
    }
    return list;
  }

  getAvailableProviders(): AIProvider[] {
    return this.providers.filter((p) => p.isAvailable());
  }

  async generateWithFallback(
    imageBuffer: Buffer,
    prompt: string
  ): Promise<{ code: string; provider: string }> {
    const availableProviders = this.getAvailableProviders();

    if (availableProviders.length === 0) {
      throw new Error(
        'No AI provider configured. Add OPENROUTER_API_KEY, MISTRAL_API_KEY (Pixtral vision), and/or GEMINI_API_KEY to your environment.'
      );
    }

    let lastError: unknown;

    for (const provider of availableProviders) {
      for (let attempt = 0; attempt < TRANSIENT_ATTEMPTS; attempt++) {
        try {
          if (attempt > 0) {
            const delay = 1000 * 2 ** (attempt - 1);
            console.warn(`${provider.name}: retry ${attempt + 1}/${TRANSIENT_ATTEMPTS} after ${delay}ms (transient API error)`);
            await sleep(delay);
          }

          console.log(`Using ${provider.name}...`);

          let { text, finishReason } = await provider.generate(imageBuffer, prompt);
          console.log('Raw response length:', text.length);

          let cleanCode = this.cleanCode(text);

          if (shouldRetryGeneration(cleanCode, finishReason)) {
            console.warn('First generation looks incomplete; retrying with stricter prompt...');
            const retryPrompt = `${prompt}${RETRY_SUFFIX}`;
            const second = await provider.generate(imageBuffer, retryPrompt);
            text = second.text;
            finishReason = second.finishReason;
            cleanCode = this.cleanCode(text);
            console.log('Retry raw response length:', text.length);
            if (finishReason) console.log('Retry finishReason:', finishReason);
          }

          if (shouldRetryGeneration(cleanCode, finishReason)) {
            throw new Error(
              'The model returned incomplete code (truncated mid-line). Click Regenerate or try a simpler screenshot.'
            );
          }

          if (cleanCode.length < 30) {
            throw new Error(`Generated content is too short (${cleanCode.length} chars)`);
          }

          if (cleanCode.length < 100 && !cleanCode.includes('function') && !cleanCode.includes('const')) {
            cleanCode = `export default function GeneratedComponent() {
  return (
    <div className="p-4">
      <p>${cleanCode.replace(/"/g, '\\"')}</p>
    </div>
  );
}`;
          }

          if (!cleanCode.includes('export default') && !cleanCode.includes('export {')) {
            const componentMatch = cleanCode.match(/(?:const|function)\s+(\w+Component\w*)/);
            const componentName = componentMatch ? componentMatch[1] : 'GeneratedComponent';
            cleanCode += `\n\nexport default ${componentName};`;
          }

          console.log('Clean code length:', cleanCode.length);

          return { code: cleanCode, provider: provider.name };
        } catch (error) {
          lastError = error;
          console.error(`${provider.name} failed:`, error);

          if (shouldAbortImmediately(error)) {
            throw new Error(
              error instanceof Error
                ? error.message
                : 'API rejected the request. Check OPENROUTER_API_KEY / MISTRAL_API_KEY / GEMINI_API_KEY and billing.'
            );
          }

          if (isModelNotAvailableError(error)) {
            console.warn(`${provider.name} not available from API; trying next model`);
            break;
          }

          const transient = isTransientGeminiError(error);
          if (transient && attempt < TRANSIENT_ATTEMPTS - 1) {
            continue;
          }
          if (transient) {
            console.warn(`${provider.name} exhausted after ${TRANSIENT_ATTEMPTS} attempts; trying next model if any`);
            break;
          }

          // Non-transient (e.g. bad output): do not try another model for same logical failure
          const msg = error instanceof Error ? error.message : 'Unknown error';
          if (
            msg.includes('incomplete code') ||
            msg.includes('too short') ||
            msg.includes('truncated')
          ) {
            throw new Error(msg);
          }

          // e.g. empty response — try next model
          break;
        }
      }
    }

    const hint =
      lastError instanceof Error && TRANSIENT_GEMINI.test(lastError.message)
        ? ' The service may be busy — wait a minute and try again.'
        : '';
    throw new Error(
      `Generation failed after trying available models.${hint} ${lastError instanceof Error ? lastError.message : ''}`.trim()
    );
  }

  private cleanCode(code: string): string {
    let cleanCode = code.trim();

    cleanCode = cleanCode.replace(/^```(?:tsx|typescript|javascript|jsx|react)?\n?/i, '');
    cleanCode = cleanCode.replace(/\n?```$/i, '');
    cleanCode = cleanCode.replace(/^(?:Here's|This is|I'll create).*?(?:component|code).*?:\s*/im, '');
    cleanCode = cleanCode.replace(/^\/\*[\s\S]*?\*\/\n?/g, '');

    if (!cleanCode.includes('import') || !cleanCode.includes('react')) {
      cleanCode = "import * as React from 'react';\n\n" + cleanCode;
    }

    return cleanCode;
  }
}
