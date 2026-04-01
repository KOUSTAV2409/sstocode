import { GoogleGenerativeAI } from '@google/generative-ai';
import { looksLikeTruncatedCode, shouldRetryGeneration } from '@/lib/code-validation';

export interface AIProvider {
  name: string;
  id: string;
  generate: (imageBuffer: Buffer, prompt: string) => Promise<GenerateResult>;
  isAvailable: () => boolean;
}

export interface GenerateResult {
  text: string;
  finishReason?: string;
}

const RETRY_SUFFIX = `

CRITICAL — OUTPUT RULES (must follow):
1. Output ONE complete file only. Every string must end with its closing quote " or '.
2. Do NOT break className or any string in the middle of a word or class name.
3. If many Tailwind classes are needed, use multiple lines or shorten the design — never truncate mid-attribute.
4. End with: closing ); for return, closing }; for the component, then export default ComponentName;
5. If you cannot fit everything, simplify the UI (fewer divs) but keep valid syntax.`;

// Gemini Provider - Only provider
class GeminiProvider implements AIProvider {
  name = 'Gemini 2.5 Flash';
  id = 'gemini';
  private client: GoogleGenerativeAI;

  constructor() {
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  }

  isAvailable(): boolean {
    return !!process.env.GEMINI_API_KEY;
  }

  async generate(imageBuffer: Buffer, prompt: string): Promise<GenerateResult> {
    const base64 = imageBuffer.toString('base64');
    const model = this.client.getGenerativeModel({
      model: 'gemini-2.5-flash',
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

// AI Manager with only Gemini
export class AIManager {
  private providers: AIProvider[] = [new GeminiProvider()];

  getAvailableProviders(): AIProvider[] {
    return this.providers.filter((p) => p.isAvailable());
  }

  async generateWithFallback(
    imageBuffer: Buffer,
    prompt: string
  ): Promise<{ code: string; provider: string }> {
    const availableProviders = this.getAvailableProviders();

    if (availableProviders.length === 0) {
      throw new Error('Gemini API key not configured. Please add GEMINI_API_KEY to your environment.');
    }

    const provider = availableProviders[0];

    try {
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
      console.error(`${provider.name} failed:`, error);
      throw new Error(`Gemini generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
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
