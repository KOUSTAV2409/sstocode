import { NextResponse } from 'next/server';
import sharp from 'sharp';

// Generate a simple UI mockup as PNG for "Try with sample"
export async function GET() {
  try {
    const width = 400;
    const height = 300;
    
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1f2937"/>
        <rect x="20" y="20" width="360" height="50" rx="8" fill="#374151"/>
        <rect x="30" y="35" width="80" height="20" rx="4" fill="#6b7280"/>
        <rect x="320" y="35" width="50" height="20" rx="4" fill="#3b82f6"/>
        <rect x="20" y="90" width="170" height="180" rx="8" fill="#374151"/>
        <rect x="30" y="105" width="150" height="25" rx="4" fill="#4b5563"/>
        <rect x="30" y="140" width="150" height="15" rx="2" fill="#6b7280"/>
        <rect x="210" y="90" width="170" height="180" rx="8" fill="#374151"/>
        <rect x="220" y="105" width="150" height="25" rx="4" fill="#4b5563"/>
        <rect x="220" y="140" width="80" height="80" rx="8" fill="#10b981"/>
      </svg>
    `;

    const png = await sharp(Buffer.from(svg))
      .png()
      .toBuffer();

    return new NextResponse(new Uint8Array(png), {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Sample image error:', error);
    return NextResponse.json({ error: 'Failed to generate sample' }, { status: 500 });
  }
}
