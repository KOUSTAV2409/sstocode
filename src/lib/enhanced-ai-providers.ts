import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

// Enhanced AI Provider with only Gemini
export class EnhancedAIManager {
  
  async generateWithStreaming(
    imageBuffer: Buffer, 
    prompt: string, 
    onProgress?: (chunk: string) => void
  ) {
    const base64 = imageBuffer.toString('base64');
    const imageUrl = `data:image/jpeg;base64,${base64}`;

    if (!process.env.GEMINI_API_KEY) {
      throw new Error('Gemini API key not configured');
    }

    try {
      const model = google('gemini-2.5-flash');
      
      const { textStream } = await streamText({
        model,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              { type: 'image', image: imageUrl }
            ]
          }
        ],
        temperature: 0.1,
        maxRetries: 3,
      });

      let fullCode = '';
      for await (const chunk of textStream) {
        fullCode += chunk;
        onProgress?.(chunk);
      }

      return {
        code: this.cleanCode(fullCode),
        provider: 'Gemini 2.5 Flash'
      };

    } catch (error) {
      console.error('Gemini failed:', error);
      throw new Error(`Gemini generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private cleanCode(code: string): string {
    let cleaned = code.trim();
    
    // Remove markdown
    cleaned = cleaned.replace(/^```(?:tsx|typescript|javascript|jsx|react)?\n?/i, '');
    cleaned = cleaned.replace(/\n?```$/i, '');
    
    // Remove explanations
    cleaned = cleaned.replace(/^Here's.*?component.*?:/im, '');
    cleaned = cleaned.replace(/^This.*?component.*?:/im, '');
    
    // Ensure React import
    if (!cleaned.includes('import') || !cleaned.includes('react')) {
      cleaned = "import * as React from 'react';\n\n" + cleaned;
    }

    return cleaned;
  }
}
