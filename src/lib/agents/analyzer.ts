import { GoogleGenerativeAI } from '@google/generative-ai';

export interface AnalyzerResult {
  layoutType: string;
  designSystem: {
    colors: string[];
    typography: string[];
    spacing: string[];
  };
  components: string[];
}

export class AnalyzerAgent {
  private client: GoogleGenerativeAI;
  private modelId: string = 'gemini-2.5-flash';

  constructor() {
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  }

  async analyze(imageBuffer: Buffer): Promise<AnalyzerResult> {
    const base64 = imageBuffer.toString('base64');
    const model = this.client.getGenerativeModel({
      model: this.modelId,
      generationConfig: {
        temperature: 0.2, // Low temp for analytical consistency
        responseMimeType: 'application/json',
      },
    });

    const prompt = `Analyze this UI screenshot and output JSON with the following structure:
{
  "layoutType": "Description of the main layout (e.g. Flexbox dashboard, Grid landing page)",
  "designSystem": {
    "colors": ["Hex codes found"],
    "typography": ["Font families or weights inferred"],
    "spacing": ["General padding/margin patterns"]
  },
  "components": ["List of logical UI components identified (e.g., Header, Sidebar, HeroSection)"]
}
`;

    const result = await model.generateContent([
      prompt,
      { inlineData: { mimeType: 'image/jpeg', data: base64 } },
    ]);

    const text = result.response.text();
    try {
      return JSON.parse(text) as AnalyzerResult;
    } catch (e) {
      console.error('Failed to parse Analyzer output:', text);
      throw new Error('Analyzer Agent failed to produce valid JSON.');
    }
  }
}
