import { NextResponse } from 'next/server';
import { AIManager } from '@/lib/ai-providers';

export async function GET() {
  try {
    const aiManager = new AIManager();
    const providers = aiManager.getAvailableProviders().map(p => ({
      id: p.id,
      name: p.name
    }));

    return NextResponse.json({ providers });
  } catch (error) {
    return NextResponse.json({ providers: [] });
  }
}
