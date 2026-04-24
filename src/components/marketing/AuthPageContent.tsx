'use client';

import Link from 'next/link';
import { Cloud, Terminal, Unlock } from 'lucide-react';
import { useState } from 'react';

export default function AuthPageContent() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <main className="min-h-screen flex items-center justify-center pt-16 monolith-gradient overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-container/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-tertiary/10 blur-[100px]" />
        </div>
        <div className="w-full max-w-5xl px-6 z-10 flex flex-col md:flex-row items-stretch min-h-[600px] py-12">
          <div className="flex-1 flex flex-col justify-center p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-[#ffe0b0]">
                Welcome to <br />
                NexusUI.
              </h1>
              <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
                Accounts are not wired up yet — use the app without signing in, or open a GitHub issue if you want SSO later. This
                screen is a preview of the auth experience.
              </p>
            </div>
            <div className="flex items-center gap-4 py-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACN2q0TBglJNI7hhCfLWL1W-WH-v7LnAeXUZqcIJuk3T6QKAYv0hQcdqfsL9iIwX_9cnmTABCqRigZo7sBw2XJZDxccbn2cSm1EvuIbJwsMf2QcXHfmmMU5VAzCufcH2qE3ix0iSn1sU2Y1Ars9POWDubMYB7nQ8MhxOKRc1Si7zRIwBKpvql7eSAXCNGztHyf22KX_1CRJTOikr3CAMt13TbE8yuQKqzTH-BKzsYP6js7QPdc6rI4WfroXORphAE3zmIrGyN_3DTZ"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFYiNJz7nOTDPSAOUZWa2dkpxafOEDn16AZ7DkuMAC7HTLsfIxktq_slVsG3ikTqMGcicKNc-VNMG0TW7DRDMAzAPtDd0EapHdZldz0LBtlqvPumxJ7gvCtRJQKjZk8455rWNXqswwHKF7-WLcq0w31lM90Tdk-n5I85VscRRhIy-dct3zlCqWfjBHlRAsx2Ds4aruKq8P51QqvMB7bdcWJRmD0fpyEZvTyg_Ft1_57V9WZ5wGxesWTCgZO6i6fJSe5RTIoJjVTbJO"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-xs font-bold text-tertiary">
                  +2k
                </div>
              </div>
              <span className="text-sm uppercase tracking-[0.1em] text-on-surface/60">Developers connected</span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="glass-panel relative w-full max-w-md border border-outline-variant/15 p-6 sm:p-8 md:p-10">
              <div className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center bg-primary-container text-on-primary sm:-right-4 sm:-top-4 sm:h-12 sm:w-12">
                <Unlock className="size-6" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="space-y-8">
                <div className="flex bg-surface-container-lowest p-1 rounded-sm">
                  <button
                    type="button"
                    onClick={() => setMode('signin')}
                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                      mode === 'signin' ? 'bg-surface-container-high text-[#ffe0b0]' : 'text-on-surface/40 hover:text-on-surface'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                      mode === 'signup' ? 'bg-surface-container-high text-[#ffe0b0]' : 'text-on-surface/40 hover:text-on-surface'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#ffe0b0]/80">Electronic Mail</label>
                    <div className="relative group input-focus-accent">
                      <input
                        className="w-full bg-surface-container-lowest border-none text-on-surface p-4 focus:ring-0 placeholder:text-on-surface/20 font-mono text-sm transition-all duration-200"
                        placeholder="dev@NexusUI.io"
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#ffe0b0]/80">Access Code</label>
                      <a className="text-[10px] uppercase tracking-widest text-tertiary/60 hover:text-tertiary transition-colors" href="#">
                        Recover?
                      </a>
                    </div>
                    <div className="relative group input-focus-accent">
                      <input
                        className="w-full bg-surface-container-lowest border-none text-on-surface p-4 focus:ring-0 placeholder:text-on-surface/20 font-mono text-sm transition-all duration-200"
                        placeholder="••••••••"
                        type="password"
                        autoComplete="current-password"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-primary-container text-on-primary py-4 font-bold uppercase tracking-[0.2em] text-sm active:scale-[0.98] transition-transform hover:shadow-[0_0_20px_rgba(255,189,56,0.3)]"
                  >
                    {mode === 'signin' ? 'Authorize Connection' : 'Create account'}
                  </button>
                </div>
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-outline-variant/10" />
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-on-surface/30">Or Synchronize Via</span>
                  <div className="flex-grow border-t border-outline-variant/10" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/KOUSTAV2409/NexusUI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-surface-bright py-3 text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 transition-transform"
                  >
                    <Terminal className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span className="text-[10px] font-bold uppercase tracking-widest">GitHub</span>
                  </a>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 bg-surface-bright py-3 text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 transition-transform"
                  >
                    <Cloud className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 px-8 bg-background border-t border-obsidian-surface-high/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-5xl mx-auto">
          <div className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40">© {new Date().getFullYear()} NexusUI</div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/">
              Home
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/docs">
              Docs
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/pricing">
              Pricing
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/roadmap">
              Roadmap
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/contributing">
              Contributing
            </Link>
            <a
              className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300"
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
