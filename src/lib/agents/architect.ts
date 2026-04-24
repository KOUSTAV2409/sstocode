import { GoogleGenerativeAI } from '@google/generative-ai';
import { AnalyzerResult } from './analyzer';

export interface ArchitecturePlan {
  mainComponent: string;
  subComponents: { name: string; props: string[]; description: string }[];
  fileStructure: string[];
}

export class ArchitectAgent {
  private client: GoogleGenerativeAI;
  private modelId: string = 'gemini-2.5-flash';

  constructor() {
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  }

  async planArchitecture(analyzerData: AnalyzerResult): Promise<ArchitecturePlan> {
    const model = this.client.getGenerativeModel({
      model: this.modelId,
      generationConfig: {
        temperature: 0.3,
        responseMimeType: 'application/json',
      },
    });

    const prompt = `You are a Senior Frontend Architect. Based on the following analysis of a UI screenshot, create a detailed React component architecture plan.
    
Analysis Data:
${JSON.stringify(analyzerData, null, 2)}

Output JSON with this structure:
{
  "mainComponent": "Name of the root component",
  "subComponents": [
    {
      "name": "ComponentName",
      "props": ["prop1", "prop2"],
      "description": "What this component does"
    }
  ],
  "fileStructure": ["src/components/Main.tsx", "src/components/ui/Button.tsx"]
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    try {
      return JSON.parse(text) as ArchitecturePlan;
    } catch (e) {
      console.error('Failed to parse Architect output:', text);
      throw new Error('Architect Agent failed to produce valid JSON.');
    }
  }
}
