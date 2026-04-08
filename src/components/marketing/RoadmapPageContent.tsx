import Link from 'next/link';

export default function RoadmapPageContent() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-24 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
        <header className="mb-24 max-w-3xl">
          <div className="inline-block bg-surface-container-highest px-3 py-1 mb-6">
            <span className="text-[10px] font-label uppercase tracking-[0.2em] text-tertiary">Product roadmap</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-headline font-bold tracking-tighter text-on-surface mb-8">
            The <span className="text-primary-container">sstocode</span> roadmap
          </h1>
          <p className="text-on-surface/60 text-xl font-light leading-relaxed">
            What we are building next: better generation, preview, and developer experience — tracked openly on GitHub.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                cycle
              </span>
              <h2 className="text-[10px] font-label uppercase tracking-[0.3em] text-[#ffe0b0]">In Progress</h2>
            </div>

            <div className="bg-surface-container-low p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">grid_view</span>
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6 flex-wrap gap-2">
                  <h3 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface">Preview &amp; editor polish</h3>
                  <span className="text-[10px] font-label bg-primary-container/10 text-primary-container px-2 py-1">in progress</span>
                </div>
                <p className="text-on-surface/50 mb-8 max-w-md">
                  Sandpack preview, Monaco editing, device modes, and zoom — so generated code is easy to verify before you copy it into
                  your app.
                </p>
                <div className="h-1 bg-surface-container-high w-full relative">
                  <div className="h-full bg-primary-container w-[72%]" />
                </div>
                <div className="mt-4 flex justify-between items-center text-[10px] font-label text-on-surface/40 uppercase tracking-widest">
                  <span>Integration Phase</span>
                  <span>72%</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 relative group">
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary-container">terminal</span>
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Generation quality</h3>
                  <p className="text-on-surface/50 text-sm mb-6">
                    Retries, truncation handling, and prompt tuning so Gemini returns complete React + Tailwind more reliably.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="text-[10px] font-label text-tertiary bg-tertiary/5 px-2 py-1">Gemini</span>
                    <span className="text-[10px] font-label text-tertiary bg-tertiary/5 px-2 py-1">Next.js</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-on-surface/30">event_note</span>
                <h2 className="text-[10px] font-label uppercase tracking-[0.3em] text-on-surface/50">Planned</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-container p-6 monolith-border">
                  <h3 className="text-lg font-headline font-medium text-on-surface mb-2">Figma Plugin</h3>
                  <p className="text-sm text-on-surface/50 mb-4">Native integration for direct bridge to SSTOCODE workspace.</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#dac3a9]" />
                    <span className="text-[9px] font-label uppercase tracking-widest text-[#dac3a9]">Scheduled Q3</span>
                  </div>
                </div>
                <div className="bg-surface-container p-6 monolith-border">
                  <h3 className="text-lg font-headline font-medium text-on-surface mb-2">Export to Vue/Svelte</h3>
                  <p className="text-sm text-on-surface/50 mb-4">
                    Extending the engine beyond React/Tailwind to support native Vue 3 and Svelte architectures.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#dac3a9]" />
                    <span className="text-[9px] font-label uppercase tracking-widest text-[#dac3a9]">In Research</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-tertiary">check_circle</span>
                <h2 className="text-[10px] font-label uppercase tracking-[0.3em] text-tertiary">Completed</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-xs text-on-surface/30 mt-1">done</span>
                  <div>
                    <span className="text-sm font-medium text-on-surface">Screenshot → React + Tailwind</span>
                    <p className="text-[11px] text-on-surface/40">Gemini multimodal generation from UI images.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-xs text-on-surface/30 mt-1">done</span>
                  <div>
                    <span className="text-sm font-medium text-on-surface">Live preview &amp; editor</span>
                    <p className="text-[11px] text-on-surface/40">Monaco + Sandpack workflow.</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-32">
          <div className="glass-panel p-8 md:p-16 border-t border-primary-container/10 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
            <div className="max-w-xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">
                Shape <br />
                sstocode.
              </h2>
              <p className="text-on-surface/50 leading-relaxed">
                Open an issue, pick up a good-first-issue, or suggest a feature — the roadmap follows what builders need.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
              <a
                href="https://github.com/KOUSTAV2409/sstocode/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-container text-on-primary font-bold uppercase text-[10px] tracking-[0.2em] py-5 px-12 hover:opacity-90 transition-opacity text-center"
              >
                Request feature
              </a>
              <a
                href="https://github.com/KOUSTAV2409/sstocode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary border border-tertiary/20 font-bold uppercase text-[10px] tracking-[0.2em] py-5 px-12 hover:bg-tertiary/5 transition-colors text-center"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 px-8 bg-background border-t border-obsidian-surface-high/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-7xl mx-auto">
          <p className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40">© {new Date().getFullYear()} sstocode</p>
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
            <Link className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300" href="/auth">
              Sign in
            </Link>
            <Link
              className="font-body text-[10px] uppercase tracking-widest text-on-surface opacity-40 hover:text-tertiary hover:opacity-100 transition-opacity duration-300"
              href="/contributing"
            >
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
