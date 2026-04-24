import { AnalyzerAgent } from './analyzer';
import { ArchitectAgent } from './architect';
import { CoderAgent } from './coder';

export class AgentPipeline {
  private analyzer: AnalyzerAgent;
  private architect: ArchitectAgent;
  private coder: CoderAgent;

  constructor() {
    this.analyzer = new AnalyzerAgent();
    this.architect = new ArchitectAgent();
    this.coder = new CoderAgent();
  }

  async run(imageBuffer: Buffer, userPrompt: string): Promise<{ code: string; provider: string }> {
    console.log('[AgentPipeline] Starting workflow...');
    
    // Step 1: Analyze
    console.log('[AgentPipeline] Running Analyzer...');
    const analyzerData = await this.analyzer.analyze(imageBuffer);
    console.log('[AgentPipeline] Analyzer result:', analyzerData);

    // Step 2: Architect
    console.log('[AgentPipeline] Running Architect...');
    const architecture = await this.architect.planArchitecture(analyzerData);
    console.log('[AgentPipeline] Architecture plan:', architecture);

    // Step 3: Code Generation
    console.log('[AgentPipeline] Running Coder...');
    let rawCode = await this.coder.generateCode(imageBuffer, analyzerData, architecture, userPrompt);
    
    // Step 4: Simple clean up (Reviewer step could be expanded later)
    rawCode = this.cleanCode(rawCode);

    return {
      code: rawCode,
      provider: 'NexusUI Agentic Pipeline (Gemini 2.5 Flash)',
    };
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
