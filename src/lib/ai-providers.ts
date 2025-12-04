import { GoogleGenerativeAI } from '@google/generative-ai';

export interface AIProvider {
  name: string;
  id: string;
  generate: (imageBuffer: Buffer, prompt: string) => Promise<string>;
  isAvailable: () => boolean;
}

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

  async generate(imageBuffer: Buffer, prompt: string): Promise<string> {
    const base64 = imageBuffer.toString('base64');
    const model = this.client.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      generationConfig: {
        temperature: 0.3,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      },
    });
    
    const result = await model.generateContent([
      prompt,
      { inlineData: { mimeType: 'image/jpeg', data: base64 } },
    ]);

    return result.response.text();
  }
}

// AI Manager with only Gemini
export class AIManager {
  private providers: AIProvider[] = [
    new GeminiProvider(),
  ];

  getAvailableProviders(): AIProvider[] {
    return this.providers.filter(p => p.isAvailable());
  }

  async generateWithFallback(imageBuffer: Buffer, prompt: string): Promise<{ code: string; provider: string }> {
    const availableProviders = this.getAvailableProviders();
    
    if (availableProviders.length === 0) {
      throw new Error('Gemini API key not configured. Please add GEMINI_API_KEY to your environment.');
    }

    const provider = availableProviders[0];
    
    try {
      console.log(`Using ${provider.name}...`);
      
      const code = await provider.generate(imageBuffer, prompt);
      console.log('Raw response length:', code.length);
      
      let cleanCode = this.cleanCode(code);
      console.log('Clean code length:', cleanCode.length);
      
      // More lenient validation - just check for basic content
      if (cleanCode.length < 50) {
        throw new Error('Generated content is too short');
      }
      
      // Ensure proper export
      if (!cleanCode.includes('export default') && !cleanCode.includes('export {')) {
        const componentMatch = cleanCode.match(/(?:const|function)\s+(\w+Component\w*)/);
        const componentName = componentMatch ? componentMatch[1] : 'GeneratedComponent';
        cleanCode += `\n\nexport default ${componentName};`;
      }
      
      return { code: cleanCode, provider: provider.name };

    } catch (error) {
      console.error(`${provider.name} failed:`, error);
      throw new Error(`Gemini generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private cleanCode(code: string): string {
    let cleanCode = code.trim();
    
    // Remove markdown blocks
    cleanCode = cleanCode.replace(/^```(?:tsx|typescript|javascript|jsx|react)?\n?/i, '');
    cleanCode = cleanCode.replace(/\n?```$/i, '');
    
    // Remove only leading explanatory text, not all text
    cleanCode = cleanCode.replace(/^(?:Here's|This is|I'll create).*?(?:component|code).*?[:]\s*/im, '');
    
    // Remove only block comments, keep single line comments that might be important
    cleanCode = cleanCode.replace(/^\/\*[\s\S]*?\*\/\n?/g, '');
    
    // Ensure React import if missing
    if (!cleanCode.includes('import') || !cleanCode.includes('react')) {
      cleanCode = "import * as React from 'react';\n\n" + cleanCode;
    }

    return cleanCode;
  }
}
