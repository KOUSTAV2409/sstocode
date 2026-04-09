import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { isTransientGeminiError } from '@/lib/ai-providers';
import { MISTRAL_MODEL_CHAIN, streamMistralCompletion } from '@/lib/mistral-provider';
import { OPENROUTER_MODEL_CHAIN, streamOpenRouterCompletion } from '@/lib/openrouter-provider';

const STREAMING_GEMINI_CHAIN = [
  { id: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash' },
  { id: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash' },
  { id: 'gemini-1.5-flash', label: 'Gemini 1.5 Flash' },
] as const;

export class EnhancedAIManager {
  async generateWithStreaming(
    imageBuffer: Buffer,
    prompt: string,
    onProgress?: (chunk: string) => void
  ) {
    const base64 = imageBuffer.toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64}`;

    if (
      !process.env.OPENROUTER_API_KEY?.trim() &&
      !process.env.MISTRAL_API_KEY?.trim() &&
      !process.env.GEMINI_API_KEY
    ) {
      throw new Error('No AI provider configured. Add OPENROUTER_API_KEY, MISTRAL_API_KEY, or GEMINI_API_KEY.');
    }

    let lastError: unknown;

    if (process.env.OPENROUTER_API_KEY?.trim()) {
      for (const { modelId, displayName } of OPENROUTER_MODEL_CHAIN) {
        try {
          console.log(`OpenRouter streaming: ${displayName}...`);
          let fullCode = '';
          await streamOpenRouterCompletion(modelId, imageBuffer, prompt, (chunk) => {
            fullCode += chunk;
            onProgress?.(chunk);
          });
          return {
            code: this.cleanCode(fullCode),
            provider: displayName,
          };
        } catch (error) {
          lastError = error;
          console.error(`${displayName} OpenRouter stream failed:`, error);
          if (
            !isTransientGeminiError(error) &&
            !/404|not found|invalid model/i.test(String(error))
          ) {
            throw new Error(error instanceof Error ? error.message : 'Streaming generation failed');
          }
        }
      }
    }

    if (process.env.MISTRAL_API_KEY?.trim()) {
      for (const { modelId, displayName } of MISTRAL_MODEL_CHAIN) {
        try {
          console.log(`Mistral streaming: ${displayName}...`);
          let fullCode = '';
          await streamMistralCompletion(modelId, imageBuffer, prompt, (chunk) => {
            fullCode += chunk;
            onProgress?.(chunk);
          });
          return {
            code: this.cleanCode(fullCode),
            provider: displayName,
          };
        } catch (error) {
          lastError = error;
          console.error(`${displayName} Mistral stream failed:`, error);
          if (
            !isTransientGeminiError(error) &&
            !/404|not found|invalid model/i.test(String(error))
          ) {
            throw new Error(error instanceof Error ? error.message : 'Streaming generation failed');
          }
        }
      }
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error(
        lastError instanceof Error
          ? `Streaming failed: ${lastError.message}`
          : 'Streaming failed (no Gemini fallback configured)'
      );
    }

    for (const { id, label } of STREAMING_GEMINI_CHAIN) {
      try {
        console.log(`Streaming with ${label} (direct Gemini)...`);
        const model = google(id);

        const { textStream } = await streamText({
          model,
          messages: [
            {
              role: 'user',
              content: [
                { type: 'text', text: prompt },
                { type: 'image', image: imageUrl },
              ],
            },
          ],
          temperature: 0.1,
          maxRetries: 2,
        });

        let fullCode = '';
        for await (const chunk of textStream) {
          fullCode += chunk;
          onProgress?.(chunk);
        }

        return {
          code: this.cleanCode(fullCode),
          provider: label,
        };
      } catch (error) {
        lastError = error;
        console.error(`${label} streaming failed:`, error);
        if (!isTransientGeminiError(error) && !/404|not found|invalid model/i.test(String(error))) {
          throw new Error(error instanceof Error ? error.message : 'Streaming generation failed');
        }
      }
    }

    throw new Error(
      lastError instanceof Error
        ? `Streaming failed after fallbacks: ${lastError.message}`
        : 'Streaming failed after fallbacks'
    );
  }

  private cleanCode(code: string): string {
    let cleaned = code.trim();

    cleaned = cleaned.replace(/^```(?:tsx|typescript|javascript|jsx|react)?\n?/i, '');
    cleaned = cleaned.replace(/\n?```$/i, '');

    cleaned = cleaned.replace(/^Here's.*?component.*?:/im, '');
    cleaned = cleaned.replace(/^This.*?component.*?:/im, '');

    if (!cleaned.includes('import') || !cleaned.includes('react')) {
      cleaned = "import * as React from 'react';\n\n" + cleaned;
    }

    return cleaned;
  }
}
