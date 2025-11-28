// src/app/page.tsx
import UploadZone from '@/components/UploadZone';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            DevForge
          </h1>
          <p className="text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Open-source Cursor.ai alternative · Upload any UI screenshot → get clean React + Tailwind code instantly
          </p>
          <p className="text-sm text-gray-500 mt-4">Building in public · Next.js 14 + Gemini Flash</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <UploadZone />
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/yourusername/devforge"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-full hover:bg-white/20 transition"
          >
            Star on GitHub (watching the journey)
          </a>
        </div>
      </div>
    </main>
  );
}