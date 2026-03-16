import { ImageResponse } from 'next/og';

export const alt = 'sstocode - AI-Powered Design to Code';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo - </> code brackets */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 32 32"
            fill="none"
            style={{ marginRight: 16 }}
          >
            <path
              d="M10 8L6 16l4 8M22 8l4 8-4 8M18 6l-4 20"
              stroke="#a78bfa"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}
        >
          sstocode
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            marginBottom: 48,
          }}
        >
          Design to Code
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#71717a',
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          Transform UI screenshots into production-ready React components with AI
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
