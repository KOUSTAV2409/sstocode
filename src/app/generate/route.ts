// src/app/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import sharp from 'sharp';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `
You are an elite React + Tailwind CSS engineer.
Convert the given UI screenshot into a SINGLE, clean, production-ready React component.
Rules:
- Use React 19 + TypeScript
- Start with: import * as React from 'react';
- Use only Tailwind CSS (no CSS modules)
- Use shadcn/ui style (rounded-xl, proper spacing)
- Responsive (mobile-first)
- Include dark mode with class="dark"
- Subtle hover effects
- Export as default component named GeneratedComponent
- Use proper TypeScript syntax: const GeneratedComponent = () => { ... }
- NO React.FC type annotation
- NO explanations, NO markdown, NO backticks — pure code only
`;

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'API key missing' }, { status: 500 });
    }

    const formData = await req.formData();
    const image = formData.get('image') as File | null;
    if (!image) return NextResponse.json({ error: 'No image' }, { status: 400 });

    const buffer = Buffer.from(await image.arrayBuffer());
    const optimized = await sharp(buffer)
      .resize(1024, 1024, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 90 })
      .toBuffer();

    const base64 = optimized.toString('base64');
    const mimeType = 'image/jpeg';

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent([
      SYSTEM_PROMPT,
      { inlineData: { mimeType, data: base64 } },
    ]);

    // CLEAN THE OUTPUT — removes ```tsx, ```, extra newlines, duplicate imports
    let code = result.response.text().trim();
    code = code.replace(/^```(?:tsx|javascript|jsx)?\n?/, '');
    code = code.replace(/\n?```$/, '');
    
    // Remove duplicate React imports
    const lines = code.split('\n');
    let hasReactImport = false;
    const cleanedLines = lines.filter(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('import') && (trimmed.includes('* as React') || trimmed.includes("'react'") || trimmed.includes('"react"'))) {
        if (hasReactImport) return false;
        hasReactImport = true;
      }
      return true;
    });
    code = cleanedLines.join('\n');

    return NextResponse.json({ code });
  } catch (error: unknown) {
    console.error('Gemini error:', error);
    const message = error instanceof Error ? error.message : 'Failed to generate';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}