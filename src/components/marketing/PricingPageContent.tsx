import Link from 'next/link';
import { CheckCircle, Shield, Zap } from 'lucide-react';

const BOTTOM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHt1LMaFUnHYuOOAA3QwK_KMP1uUss_a9GFiDOCtpF_oGSzMfOSYL5WvasXcvfFtO89KgP0qy2eWYe-SiCMONKqmb_0QcPvuvnLg99py46dLKzewnPf56pYrRlAyOdACyOdYzngMbKXM5qYgzFAiZBmuZwHF8XzeigKGcK0WYmpu413Cbo6Ds7YuRClTcNyfS6iJ_yy1TItcZZlbSo0mzNIw01EqgNdQ9hdmJL1iph_D8RPufRJb6pTDgKNL4dUZAD2iZOUKOvKld6';

export default function PricingPageContent() {
  return (
    <div className="min-h-screen bg-void font-sans text-white selection:bg-primary-accent selection:text-void">
      <main className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-block py-1.5 px-4 bg-surface-highest border border-ghost-border rounded-full mb-6">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary-accent">Plans &amp; vision</span>
          </div>
          <h1 className="font-sans text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9]">Simple tiers for NexusUI</h1>
          <p className="font-sans text-lg text-on-surface-muted leading-relaxed font-light">
            The app is open source and free to run locally. Tiers below describe future hosted options — today, everything runs on your
            machine with your own Gemini API key.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-32">
          <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 flex flex-col min-h-[500px]">
            <div className="mb-12">
              <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted">Tier 01</span>
              <h2 className="font-sans text-3xl font-bold mt-2">Starter</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-sans text-4xl font-bold text-white">Free</span>
                <span className="text-sm text-on-surface-muted font-sans font-bold tracking-widest">/ FOREVER</span>
              </div>
            </div>
            <div className="flex-grow space-y-6">
              {['Single project node', 'Community support', 'Public repositories only'].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle className="size-5 shrink-0 text-primary-accent mt-0.5" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-white/80">{t}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contributing"
              className="mt-12 w-full py-4 bg-surface border border-ghost-border text-white font-bold text-xs tracking-widest uppercase hover:bg-surface-high rounded-full transition-all text-center block"
            >
              Run locally
            </Link>
          </div>

          <div className="bg-surface-low border border-ghost-border diffuse-shadow rounded-3xl p-8 flex flex-col min-h-[500px] relative">
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-primary-accent to-transparent" />
            <div className="mb-12">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-primary-accent">Tier 02</span>
                <span className="w-fit px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary-accent bg-primary-accent/10 rounded-full">
                  Highly Recommended
                </span>
              </div>
              <h2 className="font-sans text-3xl font-bold mt-2">Pro</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-sans text-4xl font-bold text-white">$49</span>
                <span className="text-sm text-on-surface-muted font-sans font-bold tracking-widest">/ MONTHLY</span>
              </div>
            </div>
            <div className="flex-grow space-y-6">
              {['Unlimited exports', 'Private projects', 'Team collaboration', 'Advanced analytics'].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle className="size-5 shrink-0 text-primary-accent mt-0.5" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-white">{t}</span>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/KOUSTAV2409/NexusUI/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 w-full py-4 bg-primary-accent text-void font-bold text-xs tracking-widest uppercase hover:brightness-110 rounded-full transition-all shadow-[0_0_30px_-5px_rgba(255,126,95,0.4)] text-center block"
            >
              Request hosted tier
            </a>
          </div>

          <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 flex flex-col min-h-[500px]">
            <div className="mb-12">
              <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted">Tier 03</span>
              <h2 className="font-sans text-3xl font-bold mt-2">Enterprise</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-sans text-4xl font-bold text-white">Custom</span>
                <span className="text-sm text-on-surface-muted font-sans font-bold tracking-widest">/ ANNUAL</span>
              </div>
            </div>
            <div className="flex-grow space-y-6">
              {['Custom SLA agreements', 'Dedicated support engineer', 'On-premise deployment', 'White-label capability'].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle className="size-5 shrink-0 text-primary-accent mt-0.5" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-white/80">{t}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:koustavganguly24@gmail.com"
              className="mt-12 w-full py-4 bg-surface border border-ghost-border text-white font-bold text-xs tracking-widest uppercase hover:bg-surface-high rounded-full transition-all text-center block"
            >
              Contact
            </a>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="md:col-span-2 bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-10">
            <h3 className="font-sans text-2xl font-bold mb-4 italic text-white">Built for Scale</h3>
            <p className="text-sm text-on-surface-muted leading-relaxed font-light">
              NexusUI is built for reliability: Next.js, typed APIs, and a preview pipeline you can trust while you iterate on prompts
              and models.
            </p>
          </div>
          <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 flex flex-col justify-between">
            <Shield className="size-10 text-primary-accent shrink-0" strokeWidth={1.5} aria-hidden />
            <div className="mt-4">
              <p className="font-sans font-bold text-[10px] uppercase text-primary-accent tracking-widest mb-1">Security</p>
              <p className="text-sm font-bold text-white">End-to-End Encryption</p>
            </div>
          </div>
          <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 flex flex-col justify-between">
            <Zap className="size-10 text-secondary-accent shrink-0" strokeWidth={1.5} aria-hidden />
            <div className="mt-4">
              <p className="font-sans font-bold text-[10px] uppercase text-secondary-accent tracking-widest mb-1">Latency</p>
              <p className="text-sm font-bold text-white">&lt; 15ms Global Transit</p>
            </div>
          </div>
        </section>

        <div className="mt-32 h-64 relative overflow-hidden bg-void border border-ghost-border diffuse-shadow rounded-3xl max-w-6xl mx-auto">
          <div className="absolute inset-0 opacity-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="w-full h-full object-cover grayscale" src={BOTTOM_IMG} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h4 className="font-sans text-4xl font-light tracking-[0.4em] text-white/30">NexusUI</h4>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 px-8 bg-void border-t border-ghost-border mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-7xl mx-auto">
          <div className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted">© {new Date().getFullYear()} NexusUI</div>
          <div className="flex flex-wrap gap-8 justify-center">
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/">
              Home
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/docs">
              Docs
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/roadmap">
              Roadmap
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/auth">
              Sign in
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/contributing">
              Contributing
            </Link>
            <a
              className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300"
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
