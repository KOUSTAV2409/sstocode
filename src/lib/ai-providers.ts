import { GoogleGenerativeAI } from '@google/generative-ai';

export interface AIProvider {
  name: string;
  id: string;
  generate: (imageBuffer: Buffer, prompt: string) => Promise<string>;
  isAvailable: () => boolean;
}

// Gemini Provider with optimized settings
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
        temperature: 0.1,
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

// OpenAI Provider with optimized settings
class OpenAIProvider implements AIProvider {
  name = 'GPT-4o';
  id = 'openai';

  isAvailable(): boolean {
    return !!process.env.OPENAI_API_KEY;
  }

  async generate(imageBuffer: Buffer, prompt: string): Promise<string> {
    const base64 = imageBuffer.toString('base64');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are an expert React developer. Generate clean, production-ready React components with Tailwind CSS based on UI screenshots. Focus on pixel-perfect accuracy and modern best practices.'
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: { 
                  url: `data:image/jpeg;base64,${base64}`,
                  detail: 'high'
                }
              }
            ]
          }
        ],
        max_tokens: 4000,
        temperature: 0.1,
        top_p: 0.9,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'OpenAI API error');
    }

    return data.choices[0].message.content;
  }
}

// AI Manager with enhanced fallback logic
export class AIManager {
  private providers: AIProvider[] = [
    new GeminiProvider(),
    new OpenAIProvider(),
  ];

  getAvailableProviders(): AIProvider[] {
    return this.providers.filter(p => p.isAvailable());
  }

  async generateWithFallback(imageBuffer: Buffer, prompt: string, preferredProvider?: string): Promise<{ code: string; provider: string }> {
    const availableProviders = this.getAvailableProviders();
    
    if (availableProviders.length === 0) {
      throw new Error('No AI providers available. Please configure API keys.');
    }

    // Sort providers - preferred first, then others
    const sortedProviders = preferredProvider 
      ? [
          ...availableProviders.filter(p => p.id === preferredProvider),
          ...availableProviders.filter(p => p.id !== preferredProvider)
        ]
      : availableProviders;

    let lastError: Error | null = null;

    for (const provider of sortedProviders) {
      try {
        console.log(`Trying ${provider.name}...`);
        
        // Add retry logic for transient failures
        let attempts = 0;
        const maxAttempts = 2;
        
        while (attempts < maxAttempts) {
          try {
            const code = await provider.generate(imageBuffer, prompt);
            
            // Enhanced code cleaning
            let cleanCode = code.trim();
            
            // Remove markdown and explanations
            cleanCode = cleanCode.replace(/^```(?:tsx|typescript|javascript|jsx|react)?\n?/i, '');
            cleanCode = cleanCode.replace(/\n?```$/i, '');
            cleanCode = cleanCode.replace(/^Here's.*?component.*?:/im, '');
            cleanCode = cleanCode.replace(/^This.*?component.*?:/im, '');
            
            // Validate the code has basic React structure
            if (!cleanCode.includes('export default') && !cleanCode.includes('export {')) {
              throw new Error('Generated code missing export statement');
            }
            
            return { code: cleanCode, provider: provider.name };
          } catch (error) {
            attempts++;
            if (attempts >= maxAttempts) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s before retry
          }
        }
      } catch (error) {
        console.error(`${provider.name} failed:`, error);
        lastError = error as Error;
        continue;
      }
    }

    throw new Error(`All AI providers failed. Last error: ${lastError?.message}`);
  }
}
