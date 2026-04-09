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
      <div className="min-h-screen flex items-center justify-center bg-obsidian-bg">
        <div className="text-center space-y-6 max-w-md px-4">
          <p className="text-xl font-medium font-headline text-obsidian-on">No code found</p>
          <p className="text-sm text-obsidian-on/55">
            Generate a new component from the home page, or the link may have expired (code is stored in this tab session).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 metallic-luster text-obsidian-on-primary rounded-sm transition-opacity hover:opacity-90 font-bold text-sm">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/docs" className="text-sm text-obsidian-gold hover:underline">
              Read docs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-obsidian-bg text-obsidian-on overflow-hidden">
      {/* Preview Header */}
      <header className="flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-2 border-b border-obsidian-outline/30 bg-obsidian-surface-low/80 px-3 py-2 sm:h-12 sm:flex-nowrap sm:px-4 sm:py-0">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-1.5 text-obsidian-on/50 transition-colors hover:text-obsidian-gold sm:gap-2">
            <Home className="h-4 w-4 shrink-0" />
            <span className="hidden text-sm font-medium sm:inline">Back</span>
          </Link>
          <div className="hidden h-4 w-px bg-obsidian-outline/40 sm:block" />
          <span className="truncate text-xs text-obsidian-on/80 sm:text-sm">Component Preview</span>
          <div className="hidden lg:flex items-center gap-4 text-[11px] uppercase tracking-widest text-obsidian-on/40">
            <Link href="/docs" className="hover:text-obsidian-gold transition-colors">
              Docs
            </Link>
            <Link href="/roadmap" className="hover:text-obsidian-gold transition-colors">
              Roadmap
            </Link>
            <Link href="/contributing" className="hover:text-obsidian-gold transition-colors">
              Contributing
            </Link>
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-wrap items-center justify-end gap-2 sm:w-auto">
          {/* Settings dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-obsidian-surface-highest hover:bg-obsidian-surface-high border border-obsidian-outline/30 rounded-sm transition-colors"
            >
              <Settings2 className="w-3.5 h-3.5" />
              Settings
            </button>
            {showSettings && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowSettings(false)} />
                <div className="obsidian-glass absolute right-0 top-full z-50 mt-1 w-48 max-w-[min(12rem,calc(100vw-1.5rem))] rounded-sm border border-obsidian-outline/40 bg-obsidian-surface-low py-2 shadow-xl">
                  <p className="px-3 py-1 text-xs text-obsidian-on/45 font-medium">Device</p>
                  <div className="flex gap-1 px-2 py-1">
                    {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => { setDeviceMode(mode); setShowSettings(false); }}
                        className={`p-2 rounded-sm transition-colors ${
                          deviceMode === mode ? 'bg-obsidian-gold/20 text-obsidian-gold' : 'hover:bg-obsidian-surface-high text-obsidian-on/50'
                        }`}
                        title={mode}
                      >
                        {mode === 'desktop' && <Monitor className="w-4 h-4" />}
                        {mode === 'tablet' && <Tablet className="w-4 h-4" />}
                        {mode === 'mobile' && <Smartphone className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                  <p className="px-3 py-1 text-xs text-obsidian-on/45 font-medium mt-2">Zoom</p>
                  <div className="flex items-center gap-2 px-3 py-1">
                    <button
                      onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                      className="p-1.5 rounded-sm hover:bg-obsidian-surface-high"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-obsidian-on/80 w-12">{zoomLevel}%</span>
                    <button
                      onClick={() => setZoomLevel((z) => Math.min(150, z + 10))}
                      className="p-1.5 rounded-sm hover:bg-obsidian-surface-high"
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
            className="px-3 py-1.5 text-xs bg-obsidian-surface-highest hover:bg-obsidian-surface-high border border-obsidian-outline/30 rounded-sm transition-colors flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Improve
          </button>
          <button 
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs metallic-luster text-obsidian-on-primary rounded-sm transition-opacity hover:opacity-90 font-bold"
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
            <div className="h-full flex flex-col bg-obsidian-bg">
              <div className="h-9 border-b border-obsidian-outline/25 flex items-center px-4 bg-obsidian-surface-low/60">
                <span className="text-xs font-medium text-obsidian-on/50">Editor</span>
                <span className="text-xs text-obsidian-on/40 ml-2 hidden sm:inline">Ctrl+S to copy</span>
              </div>
              <div className="flex-1 relative min-h-0">
                <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="w-px bg-obsidian-outline/30 hover:bg-obsidian-gold/30 transition-colors" />

          <ResizablePanel defaultSize={50} minSize={25} className="min-w-0">
            <div className="h-full flex flex-col bg-obsidian-surface-low/40">
              <div className="h-9 border-b border-obsidian-outline/25 flex items-center justify-between px-4 bg-obsidian-surface-low/60">
                <span className="text-xs font-medium text-obsidian-on/50">Preview</span>
                <span className="flex items-center gap-2 text-xs text-obsidian-on/45">
                  <span className="hidden sm:inline">{deviceMode}</span>
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/80 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                </span>
              </div>

              <div className="flex-1 overflow-hidden min-h-0 p-2">
                <div className="w-full h-full rounded-sm transition-all duration-300 border border-obsidian-outline/35 bg-obsidian-bg shadow-2xl overflow-hidden">
                  <LivePreview code={code} deviceMode={deviceMode} zoomLevel={zoomLevel} />
                </div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>

        {/* Mobile: stacked layout */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden md:hidden">
          <div className="flex min-h-0 flex-[0_1_auto] flex-col border-b border-obsidian-outline/30">
            <div className="flex h-8 shrink-0 items-center border-b border-obsidian-outline/25 bg-obsidian-surface-low/60 px-3">
              <span className="text-xs font-medium text-obsidian-on/50">Editor</span>
            </div>
            <div className="h-[min(40vh,220px)] min-h-[140px] shrink-0">
              <CodeEditor code={code} onChange={(val) => setCode(val || '')} />
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex h-8 shrink-0 items-center border-b border-obsidian-outline/25 bg-obsidian-surface-low/60 px-3">
              <span className="text-xs font-medium text-obsidian-on/50">Preview</span>
            </div>
            <div className="min-h-0 flex-1 overflow-auto">
              <LivePreview code={code} deviceMode="mobile" zoomLevel={zoomLevel} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
