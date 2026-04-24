'use client';

import Link from 'next/link';
import { Cloud, Terminal, Unlock } from 'lucide-react';
import { useState } from 'react';

export default function AuthPageContent() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-void text-on-surface font-sans selection:bg-primary-accent selection:text-white">
      <main className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-accent/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary-accent/5 blur-[100px]" />
        </div>
        <div className="w-full max-w-5xl px-6 z-10 flex flex-col md:flex-row items-stretch min-h-[600px] py-12">
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-white">
                Welcome to <br />
                NexusUI.
              </h1>
              <p className="text-on-surface-muted max-w-md text-lg leading-relaxed font-light">
                Accounts are not wired up yet — use the app without signing in, or open a GitHub issue if you want SSO later. This
                screen is a preview of the auth experience.
              </p>
            </div>
            <div className="flex items-center gap-4 py-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-void bg-surface overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACN2q0TBglJNI7hhCfLWL1W-WH-v7LnAeXUZqcIJuk3T6QKAYv0hQcdqfsL9iIwX_9cnmTABCqRigZo7sBw2XJZDxccbn2cSm1EvuIbJwsMf2QcXHfmmMU5VAzCufcH2qE3ix0iSn1sU2Y1Ars9POWDubMYB7nQ8MhxOKRc1Si7zRIwBKpvql7eSAXCNGztHyf22KX_1CRJTOikr3CAMt13TbE8yuQKqzTH-BKzsYP6js7QPdc6rI4WfroXORphAE3zmIrGyN_3DTZ"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-void bg-surface overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFYiNJz7nOTDPSAOUZWa2dkpxafOEDn16AZ7DkuMAC7HTLsfIxktq_slVsG3ikTqMGcicKNc-VNMG0TW7DRDMAzAPtDd0EapHdZldz0LBtlqvPumxJ7gvCtRJQKjZk8455rWNXqswwHKF7-WLcq0w31lM90Tdk-n5I85VscRRhIy-dct3zlCqWfjBHlRAsx2Ds4aruKq8P51QqvMB7bdcWJRmD0fpyEZvTyg_Ft1_57V9WZ5wGxesWTCgZO6i6fJSe5RTIoJjVTbJO"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-void bg-surface-highest flex items-center justify-center text-xs font-bold text-white shadow-inner">
                  +2k
                </div>
              </div>
              <span className="text-sm uppercase tracking-widest text-on-surface-muted font-semibold">Developers connected</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-6 sm:p-10">
              <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center bg-primary-accent/10 rounded-full text-primary-accent border border-primary-accent/20">
                <Unlock className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="space-y-8">
                <div className="flex bg-surface border border-ghost-border p-1.5 rounded-full">
                  <button
                    type="button"
                    onClick={() => setMode('signin')}
                    className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                      mode === 'signin' ? 'bg-surface-high text-white shadow-sm' : 'text-on-surface-muted hover:text-white'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                      mode === 'signup' ? 'bg-surface-high text-white shadow-sm' : 'text-on-surface-muted hover:text-white'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white">Electronic Mail</label>
                    <div className="relative group">
                      <input
                        className="w-full bg-surface border border-ghost-border rounded-xl text-white p-4 focus:ring-1 focus:ring-primary-accent/50 focus:border-primary-accent placeholder:text-on-surface-muted/50 font-mono text-sm transition-all duration-200"
                        placeholder="dev@NexusUI.io"
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white">Access Code</label>
                      <a className="text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-primary-accent transition-colors" href="#">
                        Recover?
                      </a>
                    </div>
                    <div className="relative group">
                      <input
                        className="w-full bg-surface border border-ghost-border rounded-xl text-white p-4 focus:ring-1 focus:ring-primary-accent/50 focus:border-primary-accent placeholder:text-on-surface-muted/50 font-mono text-sm transition-all duration-200"
                        placeholder="••••••••"
                        type="password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-primary-accent text-void rounded-full py-4 font-bold uppercase tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_-5px_rgba(255,126,95,0.4)]"
                  >
                    {mode === 'signin' ? 'Authorize Connection' : 'Create account'}
                  </button>
                </div>
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-ghost-border" />
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-on-surface-muted font-bold">Or Synchronize Via</span>
                  <div className="flex-grow border-t border-ghost-border" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/KOUSTAV2409/NexusUI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-surface border border-ghost-border rounded-full py-3 text-white hover:bg-surface-high hover:border-white/20 transition-all active:scale-95"
                  >
                    <Terminal className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
                  </a>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 bg-surface border border-ghost-border rounded-full py-3 text-white hover:bg-surface-high hover:border-white/20 transition-all active:scale-95"
                  >
                    <Cloud className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span className="text-xs font-bold uppercase tracking-widest">Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 px-8 bg-void border-t border-ghost-border mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-5xl mx-auto">
          <div className="font-sans text-[10px] uppercase tracking-widest font-bold text-on-surface-muted">© {new Date().getFullYear()} NexusUI</div>
          <div className="flex flex-wrap gap-8 justify-center">
            <Link className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors" href="/">
              Home
            </Link>
            <Link className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors" href="/docs">
              Docs
            </Link>
            <Link className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors" href="/pricing">
              Pricing
            </Link>
            <Link className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors" href="/roadmap">
              Roadmap
            </Link>
            <Link className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors" href="/contributing">
              Contributing
            </Link>
            <a
              className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors"
              href="https://github.com/KOUSTAV2409/NexusUI"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
