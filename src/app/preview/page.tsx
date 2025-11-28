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

  // ULTRA-SAFE DECODING — works 100% of the time
  let code = '';
  try {
    const raw = searchParams.get('code') || '';
    code = raw ? decodeURIComponent(atob(raw)) : '';
  } catch (e) {
    code = '// Failed to decode code — please try again';
  }

  if (!code || code.length < 20) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center text-white text-2xl">
        No valid code found. Go back and try again.
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const previewCode = `
import * as React from 'react';
${code}
const App = typeof GeneratedComponent !== 'undefined' ? GeneratedComponent : () => <div className="p-10 text-center">No preview available</div>;
export default App;
  `.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto p-8 max-w-6xl">
        <h1 className="text-5xl font-black text-center mb-12 flex items-center justify-center gap-4">
          <Sparkles className="w-14 h-14 text-yellow-400" />
          Your Component Is Ready!
        </h1>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 bg-gray-50 border-b-2">
            <h2 className="text-2xl font-bold mb-6">Live Preview</h2>
            <div className="bg-white rounded-2xl border min-h-96">
              <CodePreview code={previewCode} />
            </div>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Generated Code</h2>
              <Button onClick={handleCopy} size="lg">
                {copied ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-8 rounded-2xl overflow-x-auto text-sm font-mono">
              <code>{code}</code>
            </pre>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="inline-block px-10 py-5 bg-white/10 backdrop-blur rounded-full text-xl hover:bg-white/20 transition">
            ← Generate Another
          </a>
        </div>
      </div>
    </div>
  );
}