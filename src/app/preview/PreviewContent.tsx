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
        const stored = sessionStorage.getItem(`NexusUI_${sid}`);
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
      <div className="min-h-screen flex items-center justify-center bg-void">
        <div className="text-center space-y-6 max-w-md px-4">
          <p className="text-xl font-bold font-sans text-white">No code found</p>
          <p className="text-sm text-on-surface-muted font-light">
            Generate a new component from the home page, or the link may have expired (code is stored in this tab session).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/" className="inline-flex items-center gap-2 px-6 py-2 bg-primary-accent text-void rounded-full transition-opacity hover:opacity-90 font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_-5px_rgba(255,126,95,0.4)]">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/docs" className="text-sm font-bold tracking-widest uppercase text-primary-accent hover:underline">
              Read docs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-void text-white font-sans overflow-hidden">
      {/* Preview Header */}
      <header className="flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-2 border-b border-ghost-border bg-surface/80 px-3 py-2 sm:h-12 sm:flex-nowrap sm:px-4 sm:py-0">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-1.5 text-on-surface-muted transition-colors hover:text-primary-accent sm:gap-2">
            <Home className="h-4 w-4 shrink-0" />
            <span className="hidden text-sm font-bold uppercase tracking-widest sm:inline">Back</span>
          </Link>
          <div className="hidden h-4 w-px bg-ghost-border sm:block" />
          <span className="truncate text-xs font-bold uppercase tracking-widest text-white/80 sm:text-sm">Component Preview</span>
          <div className="hidden lg:flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-muted">
            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/roadmap" className="hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="/contributing" className="hover:text-white transition-colors">
              Contributing
            </Link>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-wrap items-center justify-end gap-2 sm:w-auto">
          {/* Settings dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-surface-highest hover:bg-surface-high border border-ghost-border rounded-full transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Settings
            </button>
            {showSettings && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowSettings(false)} />
                <div className="absolute right-0 top-full z-50 mt-2 w-48 max-w-[min(12rem,calc(100vw-1.5rem))] rounded-2xl border border-ghost-border bg-surface-lowest py-2 shadow-2xl diffuse-shadow">
                  <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-muted">Device</p>
                  <div className="flex gap-1 px-2 py-1">
                    {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => { setDeviceMode(mode); setShowSettings(false); }}
                        className={`p-2 rounded-lg transition-colors ${
                          deviceMode === mode ? 'bg-primary-accent/20 text-primary-accent' : 'hover:bg-surface-high text-on-surface-muted'
                        }`}
                        title={mode}
                      >
                        {mode === 'desktop' && <Monitor className="w-4 h-4" />}
                        {mode === 'tablet' && <Tablet className="w-4 h-4" />}
                        {mode === 'mobile' && <Smartphone className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                  <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-muted mt-2">Zoom</p>
                  <div className="flex items-center gap-2 px-3 py-1">
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                      className="p-1.5 rounded-lg hover:bg-surface-high text-white"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] font-bold text-white w-12 text-center">{zoomLevel}%</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                      className="p-1.5 rounded-lg hover:bg-surface-high text-white"
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
            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-surface-highest hover:bg-surface-high border border-ghost-border rounded-full transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Improve
          </button>
          <button 
            onClick={handleCopy}
            className="px-6 py-1.5 text-[10px] bg-primary-accent text-void rounded-full transition-all hover:scale-[1.02] active:scale-95 font-bold uppercase tracking-widest shadow-[0_0_20px_-5px_rgba(255,126,95,0.4)]"
          >
            Copy Code
          </button>
        </div>
      </header>

      {/* Split View - horizontal on desktop, vertical on mobile */}
      <main className="flex-1 flex overflow-hidden min-h-0 bg-void">
        <ResizablePanelGroup 
          direction="horizontal" 
          className="flex-1 hidden md:flex"
        >
          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="h-full flex flex-col bg-void">
              <div className="h-9 border-b border-ghost-border flex items-center px-4 bg-surface/40">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-muted">Editor</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-2 hidden sm:inline">Ctrl+S to copy</span>
              </div>
              <div className="flex-1 relative min-h-0">
                <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-px bg-ghost-border hover:bg-primary-accent/50 transition-colors" />

          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="h-full flex flex-col bg-surface/20">
              <div className="h-9 border-b border-ghost-border flex items-center justify-between px-4 bg-surface/40">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-muted">Preview</span>
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/45">
                  <span className="hidden sm:inline">{deviceMode}</span>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/80 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                </span>
              </div>

              <div className="flex-1 overflow-hidden min-h-0 p-4">
                <div className="w-full h-full rounded-2xl transition-all duration-300 border border-ghost-border bg-void diffuse-shadow overflow-hidden">
                  <LivePreview code={code} deviceMode={deviceMode} zoomLevel={zoomLevel} />
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Mobile: stacked layout */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:hidden">
          <div className="flex min-h-0 flex-[0_1_auto] flex-col border-b border-ghost-border">
            <div className="flex h-8 shrink-0 items-center border-b border-ghost-border bg-surface/40 px-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-muted">Editor</span>
            </div>
            <div className="h-[min(40vh,220px)] min-h-[140px] shrink-0">
              <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex h-8 shrink-0 items-center border-b border-ghost-border bg-surface/40 px-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-muted">Preview</span>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-void p-2">
              <div className="w-full h-full rounded-xl border border-ghost-border overflow-hidden">
                <LivePreview code={code} deviceMode="mobile" zoomLevel={zoomLevel} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
