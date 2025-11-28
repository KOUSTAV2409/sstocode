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
- Use only Tailwind CSS (no CSS modules)
- Use shadcn/ui style (rounded-xl, proper spacing)
- Responsive (mobile-first)
- Include dark mode with class="dark"
- Subtle hover effects
- Export as default component named GeneratedComponent
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

    // CLEAN THE OUTPUT — removes ```tsx, ```, extra newlines
    let code = result.response.text().trim();
    code = code.replace(/^```(?:tsx|javascript|jsx)?\n?/, '');
    code = code.replace(/\n?```$/, '');

    return NextResponse.json({ code });
  } catch (error: any) {
    console.error('Gemini error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate' },
      { status: 500 }
    );
  }
}