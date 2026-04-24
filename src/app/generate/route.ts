import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import { AgentPipeline } from '@/lib/agents/pipeline';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File | null;

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Enhanced image processing
    const buffer = Buffer.from(await image.arrayBuffer());
    const optimized = await sharp(buffer)
      .resize(1200, 1200, { 
        fit: 'inside', 
        withoutEnlargement: true,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .sharpen()
      .jpeg({ 
        quality: 95,
        progressive: true,
        mozjpeg: true
      })
      .toBuffer();

    // Generate with Agentic Pipeline
    const pipeline = new AgentPipeline();
    // In a real scenario we could also pass custom user prompts if they provided any in formData
    const result = await pipeline.run(optimized, "Please convert this to React + Tailwind.");

    return NextResponse.json({ 
      code: result.code,
      provider: result.provider,
      availableProviders: [{ id: 'gemini-pipeline', name: 'Agentic Pipeline' }]
    });

  } catch (error: unknown) {
    console.error('Generation error:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate code';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
