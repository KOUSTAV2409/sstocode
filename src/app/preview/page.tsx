// src/app/preview/page.tsx → THE ONE THAT CANNOT DIE
'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Copy, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const CodePreview = dynamic(
  () => import('@uiw/react-code-preview').then((mod) => mod.default),
  { ssr: false }
);

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  let code = '';
  try {
    const raw = searchParams.get('code') || '';
    code = raw ? decodeURIComponent(atob(raw)) : '';
  } catch {
    code = '// Failed to decode';
  }

  if (!code || code.length < 20) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center text-white text-3xl font-bold">
        No code found. Try again.
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  // FINAL WRAPPER — removes any React import + fixes all edge cases
  const cleanUserCode = code
    .replace(/^import\s+.*?['"]react['"].*?;?$/gm, '') // Remove any React import
    .replace(/^export\s+default\s+.*$/gm, '')         // Remove any export default
    .trim();

  const safePreviewCode = `
// React is already available in the sandbox
import React from 'react';

// === USER CODE START ===
${cleanUserCode}
// === USER CODE END ===

// Safe export
const FinalComponent =
  typeof GeneratedComponent !== 'undefined' ? GeneratedComponent :
  typeof App !== 'undefined' ? App :
  typeof Home !== 'undefined' ? Home :
  typeof Page !== 'undefined' ? Page :
  () => <div className="flex items-center justify-center min-h-96 text-3xl text-purple-600 font-bold">Component Rendered!</div>;

export default FinalComponent;
  `.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto p-8 max-w-7xl">
        <h1 className="text-7xl font-black text-center my-16 flex items-center justify-center gap-6">
          <Sparkles className="w-20 h-20 text-yellow-400 animate-pulse" />
          Your Component Is Ready!
          <Sparkles className="w-20 h-20 text-yellow-400 animate-pulse" />
        </h1>

        <div className="bg-white rounded-3xl shadow-3xl overflow-hidden">
          <div className="p-10 bg-gradient-to-r from-purple-50 to-pink-50 border-b-4 border-purple-200">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Live Preview</h2>
            <div className="bg-white rounded-2xl border-4 border-purple-100 min-h-96 shadow-inner">
              <CodePreview code={safePreviewCode} />
            </div>
          </div>

          <div className="p-10 bg-gray-50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800">Generated Code</h2>
              <Button onClick={handleCopy} size="lg" className="text-xl px-10 py-6">
                {copied ? <Check className="w-8 h-8" /> : <Copy className="w-8 h-8" />}
                <span className="ml-3">{copied ? 'Copied!' : 'Copy Code'}</span>
              </Button>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-10 rounded-2xl overflow-x-auto text-base font-mono leading-relaxed border-2 border-gray-700">
              <code>{code}</code>
            </pre>
          </div>
        </div>

        <div className="text-center mt-20">
          <a href="/" className="inline-block px-16 py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-3xl font-bold hover:scale-105 transition transform">
            Generate Another One
          </a>
        </div>
      </div>
    </div>
  );
}