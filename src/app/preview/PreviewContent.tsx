'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
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
  const [code, setCode] = useState('');

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

  return (
    <div className="h-screen flex bg-black text-zinc-100 overflow-hidden">
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
                <div className="w-full h-full rounded-lg transition-all duration-500 ease-in-out border border-zinc-800 bg-black shadow-2xl overflow-hidden">
                  <LivePreview code={code} />
                </div>
              </div>
            </div>
          </ResizablePanel>

        </ResizablePanelGroup>
    </div>
  );
}