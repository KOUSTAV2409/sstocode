'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { Home, Monitor, Tablet, Smartphone, ZoomIn, ZoomOut, RotateCcw, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import CodeEditor from '@/components/Editor';
import LivePreview from '@/components/LivePreview';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export default function PreviewContent() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState('');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const sid = searchParams.get('sid');
    const codeParam = searchParams.get('code');
    
    if (sid && typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem(`sstocode_${sid}`);
        if (stored) {
          const { code: storedCode } = JSON.parse(stored);
          setCode(storedCode || '');
          return;
        }
      } catch {
        // Fall through
      }
    }
    
    if (codeParam) {
      try {
        const decoded = decodeURIComponent(atob(codeParam));
        setCode(decoded);
        return;
      } catch {
        setCode('// Failed to decode code');
        return;
      }
    }
    
    setCode('');
  }, [searchParams]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!');
    } catch {
      toast.error('Failed to copy code');
    }
  }, [code]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
          e.preventDefault();
          handleCopy();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCopy]);

  if (!code) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center space-y-6 max-w-md">
          <p className="text-xl font-medium text-white">No code found</p>
          <p className="text-sm text-zinc-400">
            Generate a new component from the home page, or the link may have expired (codes are stored in this tab session).
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-full transition-colors font-medium">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-black text-zinc-100 overflow-hidden">
      {/* Preview Header */}
      <header className="h-12 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-950/50 shrink-0 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">Back</span>
          </Link>
          <div className="h-4 w-px bg-zinc-700 hidden sm:block" />
          <span className="text-sm text-zinc-300">Component Preview</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Settings dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Settings
            </button>
            {showSettings && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowSettings(false)} />
                <div className="absolute right-0 top-full mt-1 z-50 w-48 py-2 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl">
                  <p className="px-3 py-1 text-xs text-zinc-500 font-medium">Device</p>
                  <div className="flex gap-1 px-2 py-1">
                    {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => { setDeviceMode(mode); setShowSettings(false); }}
                        className={`p-2 rounded-md transition-colors ${
                          deviceMode === mode ? 'bg-violet-600 text-white' : 'hover:bg-zinc-800 text-zinc-400'
                        }`}
                        title={mode}
                      >
                        {mode === 'desktop' && <Monitor className="w-4 h-4" />}
                        {mode === 'tablet' && <Tablet className="w-4 h-4" />}
                        {mode === 'mobile' && <Smartphone className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                  <p className="px-3 py-1 text-xs text-zinc-500 font-medium mt-2">Zoom</p>
                  <div className="flex items-center gap-2 px-3 py-1">
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                      className="p-1.5 rounded hover:bg-zinc-800"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-zinc-300 w-12">{zoomLevel}%</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                      className="p-1.5 rounded hover:bg-zinc-800"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => toast.info('Improve with AI coming soon!')}
            className="px-3 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Improve
          </button>
          <button 
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs bg-violet-600 hover:bg-violet-500 text-white rounded-md transition-colors font-medium"
          >
            Copy Code
          </button>
        </div>
      </header>

      {/* Split View - horizontal on desktop, vertical on mobile */}
      <main className="flex-1 flex overflow-hidden min-h-0">
        <ResizablePanelGroup 
          direction="horizontal" 
          className="flex-1 hidden md:flex"
        >
          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="h-full flex flex-col bg-black">
              <div className="h-9 border-b border-zinc-900 flex items-center px-4 bg-zinc-950/50">
                <span className="text-xs font-medium text-zinc-400">Editor</span>
                <span className="text-xs text-zinc-500 ml-2 hidden sm:inline">Ctrl+S to copy</span>
              </div>
              <div className="flex-1 relative min-h-0">
                <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-px bg-zinc-900 hover:bg-zinc-700 transition-colors" />

          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="h-full flex flex-col bg-zinc-950/30">
              <div className="h-9 border-b border-zinc-900 flex items-center justify-between px-4 bg-zinc-950/50">
                <span className="text-xs font-medium text-zinc-400">Preview</span>
                <span className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="hidden sm:inline">{deviceMode}</span>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                </span>
              </div>

              <div className="flex-1 overflow-hidden min-h-0">
                <div className="w-full h-full rounded-lg transition-all duration-300 border border-zinc-800 bg-black shadow-2xl overflow-hidden">
                  <LivePreview code={code} deviceMode={deviceMode} zoomLevel={zoomLevel} />
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Mobile: stacked layout */}
        <div className="flex-1 flex flex-col md:hidden overflow-hidden">
          <div className="flex-1 min-h-0 border-b border-zinc-800">
            <div className="h-8 border-b border-zinc-900 flex items-center px-3 bg-zinc-950/50">
              <span className="text-xs font-medium text-zinc-400">Editor</span>
            </div>
            <div className="h-48 min-h-[150px]">
              <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <div className="h-8 border-b border-zinc-900 flex items-center px-3 bg-zinc-950/50">
              <span className="text-xs font-medium text-zinc-400">Preview</span>
            </div>
            <div className="h-full overflow-auto">
              <LivePreview code={code} deviceMode="mobile" zoomLevel={zoomLevel} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
