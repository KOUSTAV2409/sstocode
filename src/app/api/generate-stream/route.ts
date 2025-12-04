import { NextRequest } from 'next/server';
import sharp from 'sharp';
import { EnhancedAIManager } from '@/lib/enhanced-ai-providers';

const ENHANCED_PROMPT = `
You are an expert React + Tailwind CSS engineer. Analyze this UI screenshot and generate a pixel-perfect React component.

REQUIREMENTS:
- Use React 19 + TypeScript
- Import: import * as React from 'react';
- Component: const GeneratedComponent = () => { ... }; export default GeneratedComponent;
- Use ONLY Tailwind CSS classes
- Responsive design (mobile-first)
- Modern patterns and best practices
- NO explanations - pure code only

Generate the complete React component:
`;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File | null;

    if (!image) {
      return new Response('No image provided', { status: 400 });
    }

    // Process image
    const buffer = Buffer.from(await image.arrayBuffer());
    const optimized = await sharp(buffer)
      .resize(1200, 1200, { 
        fit: 'inside', 
        withoutEnlargement: true,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .sharpen()
      .jpeg({ quality: 95 })
      .toBuffer();

    // Create streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const aiManager = new EnhancedAIManager();
          
          await aiManager.generateWithStreaming(
            optimized,
            ENHANCED_PROMPT,
            (chunk) => {
              // Send chunk to client
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ chunk })}\n\n`)
              );
            }
          );

          // Send completion
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`)
          );
          controller.close();

        } catch (error) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ 
              error: error instanceof Error ? error.message : 'Generation failed' 
            })}\n\n`)
          );
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }), 
      { status: 500 }
    );
  }
}
