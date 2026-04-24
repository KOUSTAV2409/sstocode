import { NextRequest, NextResponse } from 'next/server';
import { StitchMCPClient } from '@/lib/mcp/stitch-client';
import { AgentPipeline } from '@/lib/agents/pipeline';
import { AnalyzerResult } from '@/lib/agents/analyzer';

export async function POST(req: NextRequest) {
  try {
    const { projectId } = await req.json();

    if (!projectId) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    const client = new StitchMCPClient();
    const isConnected = await client.connect();

    if (!isConnected) {
      return NextResponse.json({ error: 'Failed to connect to Stitch MCP Server' }, { status: 500 });
    }

    // 1. Fetch exact design context from Google Stitch
    const projectContext = await client.getProjectContext(projectId);
    
    // We'll use the first screen as an example
    const screen = projectContext.screens[0];

    // 2. Map the precise Stitch data to our Analyzer format 
    // This bridges the gap between Stitch MCP and our Agentic Pipeline!
    const mockAnalyzerData: AnalyzerResult = {
      layoutType: screen.layout.type,
      designSystem: {
        colors: Object.values(screen.tokens.colors),
        typography: Object.values(screen.tokens.typography),
        spacing: ['4px', '8px', '16px', '24px'] // Extracted or mapped from tokens
      },
      components: screen.layout.children.map((child: any) => child.type)
    };

    // 3. Instead of parsing an image from scratch, we jump straight to Architecture & Coding
    // using the highly accurate data we pulled from Stitch.
    const pipeline = new AgentPipeline();
    
    // Using a mock image buffer just to satisfy the interface for now
    const mockImageBuffer = Buffer.from(''); 
    
    // Hack: We temporarily override the analyzer in the pipeline to use the Stitch data
    // In a full implementation, the AgentPipeline would have a runFromStitchContext() method.
    // We will bypass the analyzer step and run architect and coder directly.
    const architect = (pipeline as any).architect;
    const coder = (pipeline as any).coder;

    console.log('[Stitch Import] Running Architect...');
    const architecture = await architect.planArchitecture(mockAnalyzerData);

    console.log('[Stitch Import] Running Coder...');
    let rawCode = await coder.generateCode(
      mockImageBuffer, 
      mockAnalyzerData, 
      architecture, 
      "Generate code from Stitch Design Context."
    );

    rawCode = (pipeline as any).cleanCode(rawCode);

    return NextResponse.json({ 
      code: rawCode,
      provider: 'Google Stitch MCP + NexusUI Agentic Pipeline',
      projectData: projectContext
    });

  } catch (error: unknown) {
    console.error('Stitch import error:', error);
    const message = error instanceof Error ? error.message : 'Failed to import from Stitch';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
