import Link from 'next/link';
import { CheckCircle, Shield, Zap } from 'lucide-react';

const BOTTOM_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHt1LMaFUnHYuOOAA3QwK_KMP1uUss_a9GFiDOCtpF_oGSzMfOSYL5WvasXcvfFtO89KgP0qy2eWYe-SiCMONKqmb_0QcPvuvnLg99py46dLKzewnPf56pYrRlAyOdACyOdYzngMbKXM5qYgzFAiZBmuZwHF8XzeigKGcK0WYmpu413Cbo6Ds7YuRClTcNyfS6iJ_yy1TItcZZlbSo0mzNIw01EqgNdQ9hdmJL1iph_D8RPufRJb6pTDgKNL4dUZAD2iZOUKOvKld6';

export default function PricingPageContent() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-block py-1 px-3 bg-surface-container-highest mb-6">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary">Plans &amp; vision</span>
          </div>
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">Simple tiers for sstocode</h1>
          <p className="font-body text-lg text-on-surface/60 leading-relaxed">
            The app is open source and free to run locally. Tiers below describe future hosted options — today, everything runs on your
            machine with your own Gemini API key.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-32">
          <div className="bg-surface-container-low p-8 flex flex-col min-h-[500px]">
            <div className="mb-12">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40">Tier 01</span>
              <h2 className="font-headline text-3xl font-bold mt-2">Starter</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-headline text-4xl font-bold text-[#ffe0b0]">Free</span>
                <span className="text-sm text-on-surface/40 font-label">/ FOREVER</span>
              </div>
            </div>
            <div className="flex-grow space-y-6">
              {['Single project node', 'Community support', 'Public repositories only'].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle className="size-5 shrink-0 text-tertiary mt-0.5" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-on-surface/80">{t}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contributing"
              className="mt-12 w-full py-4 bg-surface-bright text-on-surface font-bold text-xs tracking-widest uppercase hover:bg-surface-container-high transition-colors text-center block"
            >
              Run locally
            </Link>
          </div>

          <div className="bg-surface-container p-8 flex flex-col min-h-[500px] relative">
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent" />
            <div className="mb-12">
              <div className="flex justify-between items-start gap-2">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary-container">Tier 02</span>
                <span className="px-2 py-0.5 bg-primary-container/10 text-primary-container text-[9px] font-bold uppercase tracking-tighter rounded-sm">
                  Highly Recommended
                </span>
              </div>
              <h2 className="font-headline text-3xl font-bold mt-2">Pro</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-headline text-4xl font-bold text-[#ffe0b0]">$49</span>
                <span className="text-sm text-on-surface/40 font-label">/ MONTHLY</span>
              </div>
            </div>
            <div className="flex-grow space-y-6">
              {['Unlimited exports', 'Private projects', 'Team collaboration', 'Advanced analytics'].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle className="size-5 shrink-0 text-primary-container mt-0.5" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-on-surface">{t}</span>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/KOUSTAV2409/sstocode/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 w-full py-4 bg-primary-container text-on-primary font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,189,56,0.15)] text-center block"
            >
              Request hosted tier
            </a>
          </div>

          <div className="bg-surface-container-low p-8 flex flex-col min-h-[500px]">
            <div className="mb-12">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface/40">Tier 03</span>
              <h2 className="font-headline text-3xl font-bold mt-2">Enterprise</h2>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-headline text-4xl font-bold text-[#ffe0b0]">Custom</span>
                <span className="text-sm text-on-surface/40 font-label">/ ANNUAL</span>
              </div>
            </div>
            <div className="flex-grow space-y-6">
              {['Custom SLA agreements', 'Dedicated support engineer', 'On-premise deployment', 'White-label capability'].map((t) => (
                <div key={t} className="flex gap-3 items-start">
                  <CheckCircle className="size-5 shrink-0 text-tertiary mt-0.5" strokeWidth={1.75} aria-hidden />
                  <span className="text-sm text-on-surface/80">{t}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:koustavganguly24@gmail.com"
              className="mt-12 w-full py-4 bg-surface-bright text-on-surface font-bold text-xs tracking-widest uppercase hover:bg-surface-container-high transition-colors text-center block"
            >
              Contact
            </a>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 bg-surface-container-lowest p-10 border-l border-primary-container/20">
            <h3 className="font-headline text-2xl font-bold mb-4 italic">Built for Scale</h3>
            <p className="text-sm text-on-surface/60 leading-relaxed">
              sstocode is built for reliability: Next.js, typed APIs, and a preview pipeline you can trust while you iterate on prompts
              and models.
            </p>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col justify-between">
            <Shield className="size-10 text-primary-container shrink-0" strokeWidth={1.5} aria-hidden />
            <div className="mt-4">
              <p className="font-label text-[10px] uppercase text-primary-container tracking-widest mb-1">Security</p>
              <p className="text-sm font-bold">End-to-End Encryption</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col justify-between">
            <Zap className="size-10 text-tertiary shrink-0" strokeWidth={1.5} aria-hidden />
            <div className="mt-4">
              <p className="font-label text-[10px] uppercase text-tertiary tracking-widest mb-1">Latency</p>
              <p className="text-sm font-bold">&lt; 15ms Global Transit</p>
            </div>
          </div>
        </section>

        <div className="mt-32 h-64 relative overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 opacity-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="w-full h-full object-cover" src={BOTTOM_IMG} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h4 className="font-headline text-4xl font-light tracking-[0.4em] text-on-surface/30">sstocode</h4>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-12 px-8 bg-background border-t border-obsidian-surface-high/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-7xl mx-auto">
          <div className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40">© {new Date().getFullYear()} sstocode</div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/">
              Home
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/docs">
              Docs
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/roadmap">
              Roadmap
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/auth">
              Sign in
            </Link>
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/contributing">
              Contributing
            </Link>
            <a
              className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300"
              href="https://github.com/KOUSTAV2409/sstocode"
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
