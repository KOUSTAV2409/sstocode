import { GoogleGenerativeAI } from '@google/generative-ai';
import { AnalyzerResult } from './analyzer';
import { ArchitecturePlan } from './architect';

export class CoderAgent {
  private client: GoogleGenerativeAI;
  private modelId: string = 'gemini-2.5-flash';

  constructor() {
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  }

  async generateCode(
    imageBuffer: Buffer,
    analyzerData: AnalyzerResult,
    architecture: ArchitecturePlan,
    promptContext: string
  ): Promise<string> {
    const base64 = imageBuffer.toString('base64');
    const model = this.client.getGenerativeModel({
      model: this.modelId,
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 16384,
      },
    });

    const prompt = `You are an Expert Next.js/React Developer.
    
Task: Generate the complete, production-ready React code for the UI provided in the screenshot, adhering strictly to the architecture and design system extracted below.

Design System:
${JSON.stringify(analyzerData.designSystem, null, 2)}

Architecture Plan:
${JSON.stringify(architecture, null, 2)}

User Prompt:
${promptContext}

Requirements:
1. Write cleanly structured React code using Tailwind CSS.
2. Use Lucide React for icons if needed (e.g., \`import { IconName } from 'lucide-react'\`).
3. CRITICAL: You MUST implement ALL components defined in the architecture plan within THIS SINGLE FILE. Do NOT use undefined components or external imports other than React and Lucide. Every sub-component must be fully implemented above the main exported component.
4. CRITICAL: NEVER stop mid-string or mid-className. Every className="..." must end with a closing double-quote. If a line is too long, split it cleanly, but never truncate mid-word.
5. Do NOT include markdown code blocks in your final output, just raw code.
6. Make sure there is a \`export default\` for the main component at the bottom.
7. The file MUST end with valid closing tags and syntax.
`;

    const contentParts: any[] = [prompt];
    
    if (imageBuffer && imageBuffer.length > 0) {
      const base64 = imageBuffer.toString('base64');
      contentParts.push({ inlineData: { mimeType: 'image/jpeg', data: base64 } });
    }

    const result = await model.generateContent(contentParts);

    return result.response.text();
  }
}
