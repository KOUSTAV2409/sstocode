import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import { AIManager } from '@/lib/ai-providers';

const ENHANCED_SYSTEM_PROMPT = `
CRITICAL: You MUST analyze this UI screenshot and generate a complete, functional React component. DO NOT return empty or minimal code.

REQUIREMENTS:
1. Analyze EVERY element in the image: buttons, text, colors, layout, spacing
2. Create a COMPLETE React component that recreates the UI exactly
3. Use React 19 + TypeScript syntax
4. Use ONLY Tailwind CSS classes for styling
5. Component structure: const GeneratedComponent = () => { return (...); };
6. Include ALL visual elements from the screenshot
7. Make it responsive and interactive where appropriate
8. NO explanations - ONLY the complete React component code

EXAMPLE OUTPUT FORMAT:
import * as React from 'react';

const GeneratedComponent = () => {
  return (
    <div className="...">
      {/* Complete UI recreation here */}
    </div>
  );
};

export default GeneratedComponent;

ANALYZE THE IMAGE CAREFULLY AND GENERATE THE COMPLETE COMPONENT:
`;

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

    // Generate with Gemini
    const aiManager = new AIManager();
    const result = await aiManager.generateWithFallback(optimized, ENHANCED_SYSTEM_PROMPT);

    // Enhanced code cleaning
    let cleanCode = result.code.trim();
    
    // Remove markdown code blocks
    cleanCode = cleanCode.replace(/^```(?:tsx|typescript|javascript|jsx|react)?\n?/i, '');
    cleanCode = cleanCode.replace(/\n?```$/i, '');
    
    // Remove extra explanations
    cleanCode = cleanCode.replace(/^\/\*[\s\S]*?\*\/\n?/g, '');
    cleanCode = cleanCode.replace(/^\/\/.*$/gm, '');
    
    // Ensure proper React import
    const lines = cleanCode.split('\n');
    let hasReactImport = false;
    const cleanedLines = lines.filter(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('import') && trimmed.includes('react')) {
        if (hasReactImport) return false;
        hasReactImport = true;
      }
      return trimmed.length > 0;
    });

    // Add React import if missing
    if (!hasReactImport) {
      cleanedLines.unshift("import * as React from 'react';");
    }

    const finalCode = cleanedLines.join('\n');

    return NextResponse.json({ 
      code: finalCode,
      provider: result.provider,
      availableProviders: aiManager.getAvailableProviders().map(p => ({ id: p.id, name: p.name }))
    });

  } catch (error: unknown) {
    console.error('Generation error:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate code';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
