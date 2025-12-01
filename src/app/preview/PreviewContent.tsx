// src/app/preview/PreviewContent.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Copy, Check, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';

const CodePreview = dynamic(
  () => import('@uiw/react-code-preview').then((mod) => mod.default),
  { ssr: false }
);

export default function PreviewContent() {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-xl font-medium text-slate-900">No code found</p>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <Home className="w-4 h-4" />
            Generate Again
          </Link>
        </div>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const cleanUserCode = code
    .replace(/^import\s+.*?['"]react['"].*?;?$/gm, '')
    .replace(/^export\s+default\s+.*$/gm, '')
    .trim();

  const safePreviewCode = `
import React from 'react';

${cleanUserCode}

const FinalComponent =
  typeof GeneratedComponent !== 'undefined' ? GeneratedComponent :
  typeof App !== 'undefined' ? App :
  () => <div className="p-20 text-center text-2xl text-slate-700">Component Ready</div>;

export default FinalComponent;
  `.trim();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-slate-900">Your Component</h1>
            <p className="text-sm text-slate-600">Review and copy your generated code</p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 font-medium">
            <Home className="w-4 h-4" />
            New Upload
          </Link>
        </div>

        {/* Preview Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Live Preview</h2>
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
            <CodePreview code={safePreviewCode} />
          </div>
        </div>

        {/* Code Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Generated Code</h2>
            <Button
              onClick={handleCopy}
              className="gap-2 bg-slate-900 hover:bg-slate-800 text-white"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Code
                </>
              )}
            </Button>
          </div>

          <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed border border-slate-800">
            <code>{code}</code>
          </pre>
        </div>

        {/* Footer CTA */}
        <div className="pt-8 border-t border-slate-200 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
            Convert Another Design
            <Copy className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}