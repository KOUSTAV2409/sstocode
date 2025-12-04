'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Copy, Check, Home, Code2, Monitor, Tablet, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';
import CodeEditor from '@/components/Editor';
import LivePreview from '@/components/LivePreview';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function PreviewContent() {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState('');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    try {
      const raw = searchParams.get('code') || '';
      const decoded = raw ? decodeURIComponent(atob(raw)) : '';
      setCode(decoded);
    } catch {
      setCode('// Failed to decode code');
    }
  }, [searchParams]);

  if (!code) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center space-y-6">
          <p className="text-xl font-medium text-white">No code found</p>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors font-medium">
            <Home className="w-4 h-4" />
            Go Home
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

  return (
    <div className="h-screen flex flex-col bg-black text-zinc-100 overflow-hidden">
      {/* Minimal Header */}
      <header className="h-14 border-b border-zinc-900 flex items-center justify-between px-4 bg-black shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5 text-black">
                <path d="M12 4L4 20h16L12 4z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <span className="font-semibold tracking-tight text-sm">DevForge</span>
          </Link>

          <div className="h-4 w-px bg-zinc-800" />

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Code2 className="w-3.5 h-3.5" />
            <span className="text-zinc-200 font-medium">Component.tsx</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-zinc-900 rounded-lg p-1 border border-zinc-800">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded-md transition-all ${device === 'desktop' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-1.5 rounded-md transition-all ${device === 'tablet' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded-md transition-all ${device === 'mobile' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <Button
            onClick={handleCopy}
            variant="ghost"
            className="h-8 gap-2 text-zinc-400 hover:text-white hover:bg-zinc-900 text-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </Button>

          <Link href="/" className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-medium rounded-full hover:bg-zinc-200 transition-colors">
            New
          </Link>
        </div>
      </header>

      {/* Split View */}
      <main className="flex-1 flex overflow-hidden">
        <ResizablePanelGroup direction="horizontal">

          {/* Editor */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full flex flex-col bg-black">
              <div className="h-9 border-b border-zinc-900 flex items-center px-4 bg-zinc-950/50">
                <span className="text-xs font-medium text-zinc-400">Editor</span>
              </div>
              <div className="flex-1 relative">
                <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-px bg-zinc-900 hover:bg-zinc-700 transition-colors" />

          {/* Preview */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="h-full flex flex-col bg-zinc-950/30">
              <div className="h-9 border-b border-zinc-900 flex items-center justify-between px-4 bg-zinc-950/50">
                <span className="text-xs font-medium text-zinc-400">Preview</span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
              </div>

              <div className="flex-1 p-6 overflow-auto flex items-center justify-center">
                <div
                  className={`transition-all duration-500 ease-in-out border border-zinc-800 bg-black shadow-2xl overflow-hidden ${device === 'mobile' ? 'w-[375px] h-[667px] rounded-3xl border-[6px] border-zinc-900' : ''} ${device === 'tablet' ? 'w-[768px] h-[1024px] rounded-2xl border-[6px] border-zinc-900' : ''} ${device === 'desktop' ? 'w-full h-full rounded-lg' : ''}`}
                >
                  <LivePreview code={code} />
                </div>
              </div>
            </div>
          </ResizablePanel>

        </ResizablePanelGroup>
      </main>
    </div>
  );
}