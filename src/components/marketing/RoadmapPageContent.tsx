import Link from 'next/link';
import { CalendarDays, Check, CheckCircle, LayoutGrid, RefreshCw, Terminal } from 'lucide-react';

export default function RoadmapPageContent() {
  return (
    <div className="min-h-screen bg-void text-white font-sans selection:bg-primary-accent selection:text-void">
      <main className="pt-24 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
        <header className="mb-24 max-w-3xl">
          <div className="inline-block py-1.5 px-4 bg-surface-highest border border-ghost-border rounded-full mb-6">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-primary-accent">Product roadmap</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-white mb-8">
            The <span className="text-primary-accent">NexusUI</span> roadmap
          </h1>
          <p className="text-on-surface-muted text-xl font-light leading-relaxed">
            What we are building next: better generation, preview, and developer experience — tracked openly on GitHub.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl">
          <section className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4">
              <RefreshCw className="size-6 shrink-0 text-primary-accent" strokeWidth={1.75} aria-hidden />
              <h2 className="text-[10px] font-sans font-bold uppercase tracking-widest text-white">In Progress</h2>
            </div>

            <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 relative overflow-hidden group">
              <div
                className="pointer-events-none absolute top-0 right-0 p-4 text-primary-accent/10 select-none"
                aria-hidden
              >
                <LayoutGrid className="size-26 max-md:size-20" strokeWidth={1.25} />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 flex-wrap gap-2">
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white">Preview &amp; editor polish</h3>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-primary-accent/10 text-primary-accent px-3 py-1 rounded-full shrink-0">
                    In progress
                  </span>
                </div>
                <p className="text-on-surface-muted mb-8 max-w-md font-light">
                  Sandpack preview, Monaco editing, device modes, and zoom — so generated code is easy to verify before you copy it into
                  your app.
                </p>
                <div className="h-1.5 rounded-full bg-surface-high w-full relative overflow-hidden">
                  <div className="h-full bg-primary-accent w-[72%] rounded-full" />
                </div>
                <div className="mt-4 flex justify-between items-center text-[10px] font-sans font-bold text-on-surface-muted uppercase tracking-widest">
                  <span>Integration Phase</span>
                  <span>72%</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 relative group">
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center shrink-0 border border-ghost-border">
                  <Terminal className="size-8 text-primary-accent" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 className="text-2xl font-sans font-bold text-white mb-2">Generation quality</h3>
                  <p className="text-on-surface-muted text-sm mb-6 font-light">
                    Retries, truncation handling, and prompt tuning so Gemini returns complete React + Tailwind more reliably.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="text-[10px] font-sans font-bold text-secondary-accent bg-secondary-accent/10 rounded-full px-3 py-1">Gemini</span>
                    <span className="text-[10px] font-sans font-bold text-secondary-accent bg-secondary-accent/10 rounded-full px-3 py-1">Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <CalendarDays className="size-6 shrink-0 text-on-surface-muted/50" strokeWidth={1.75} aria-hidden />
                <h2 className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-muted">Planned</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-6">
                  <h3 className="text-lg font-sans font-bold text-white mb-2">Figma Plugin</h3>
                  <p className="text-sm text-on-surface-muted font-light mb-4">Native integration for direct bridge to SSTOCODE workspace.</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-accent" />
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-primary-accent">Scheduled Q3</span>
                  </div>
                </div>
                <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-6">
                  <h3 className="text-lg font-sans font-bold text-white mb-2">Export to Vue/Svelte</h3>
                  <p className="text-sm text-on-surface-muted font-light mb-4">
                    Extending the engine beyond React/Tailwind to support native Vue 3 and Svelte architectures.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-accent" />
                    <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-primary-accent">In Research</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <CheckCircle className="size-6 shrink-0 text-secondary-accent" strokeWidth={1.75} aria-hidden />
                <h2 className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary-accent">Completed</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="size-4 shrink-0 text-secondary-accent mt-0.5" strokeWidth={2} aria-hidden />
                  <div>
                    <span className="text-sm font-bold text-white">Screenshot → React + Tailwind</span>
                    <p className="text-xs text-on-surface-muted mt-1 font-light">Gemini multimodal generation from UI images.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="size-4 shrink-0 text-secondary-accent mt-0.5" strokeWidth={2} aria-hidden />
                  <div>
                    <span className="text-sm font-bold text-white">Live preview &amp; editor</span>
                    <p className="text-xs text-on-surface-muted mt-1 font-light">Monaco + Sandpack workflow.</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-32 max-w-6xl mx-auto">
          <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-accent/10 blur-[120px] rounded-full" />
            <div className="max-w-xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
                Shape <br />
                NexusUI.
              </h2>
              <p className="text-on-surface-muted leading-relaxed font-light">
                Open an issue, pick up a good-first-issue, or suggest a feature — the roadmap follows what builders need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
              <a
                href="https://github.com/KOUSTAV2409/NexusUI/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-accent text-void font-bold uppercase text-[10px] tracking-widest py-4 px-10 rounded-full hover:brightness-110 transition-all text-center shadow-[0_0_30px_-5px_rgba(255,126,95,0.4)]"
              >
                Request feature
              </a>
              <a
                href="https://github.com/KOUSTAV2409/NexusUI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border border-ghost-border font-bold uppercase text-[10px] tracking-widest py-4 px-10 rounded-full hover:bg-surface-high transition-colors text-center"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 px-8 bg-void border-t border-ghost-border mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-7xl mx-auto">
          <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted">© {new Date().getFullYear()} NexusUI</p>
          <div className="flex flex-wrap gap-8 justify-center">
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/">
              Home
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/docs">
              Docs
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/pricing">
              Pricing
            </Link>
            <Link className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300" href="/auth">
              Sign in
            </Link>
            <Link
              className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-surface-muted hover:text-white transition-colors duration-300"
              href="/contributing"
            >
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
