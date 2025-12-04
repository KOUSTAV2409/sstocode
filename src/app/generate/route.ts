import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import { AIManager } from '@/lib/ai-providers';

const ENHANCED_SYSTEM_PROMPT = `
You are an expert React + Tailwind CSS engineer. Analyze this UI screenshot and generate a SINGLE, pixel-perfect React component.

CRITICAL REQUIREMENTS:
- Use React 19 + TypeScript syntax
- Import React: import * as React from 'react';
- Use ONLY Tailwind CSS classes (no custom CSS)
- Component name: GeneratedComponent
- Syntax: const GeneratedComponent = () => { return (...); }; export default GeneratedComponent;
- NO React.FC, NO explanations, NO markdown - pure code only

DESIGN ANALYSIS:
1. Identify layout structure (flex, grid, positioning)
2. Extract exact colors, spacing, typography
3. Detect interactive elements (buttons, inputs, links)
4. Recognize component patterns (cards, modals, navigation)
5. Implement responsive behavior (mobile-first)

TAILWIND BEST PRACTICES:
- Use semantic spacing (p-4, m-6, gap-3)
- Proper color palette (gray-50 to gray-900, blue-500, etc.)
- Responsive prefixes (sm:, md:, lg:, xl:)
- Modern utilities (backdrop-blur, bg-opacity, ring)
- Hover/focus states for interactive elements

OUTPUT REQUIREMENTS:
- Pixel-perfect recreation of the design
- Clean, readable, production-ready code
- Proper component structure and hierarchy
- Accessible markup (proper semantic HTML)
- Dark mode support where applicable

Generate ONLY the React component code - no explanations or markdown.
`;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get('image') as File | null;
    const preferredProvider = formData.get('provider') as string | null;

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

    // Generate with AI fallback
    const aiManager = new AIManager();
    const result = await aiManager.generateWithFallback(
      optimized, 
      ENHANCED_SYSTEM_PROMPT, 
      preferredProvider || undefined
    );

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