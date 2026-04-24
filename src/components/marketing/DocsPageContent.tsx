import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Braces,
  Code2,
  Copy,
  GitBranch,
  HelpCircle,
  Info,
  MessageCircle,
  Puzzle,
  Rocket,
  Sparkles,
  Terminal,
  UserCircle,
  Zap,
} from 'lucide-react';

const DOC_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDkYoQByKjBJOoyLGNligq1e-MGC9PNBXAVaQ3DQTsDh3wUNEGeM70ce7YVA_apshwEdj0GbLen5GaIytSPFDKqrUO9YWxYwPUJe1lDNiYYdDXggAkn2ueDt8AeWsSeXXSl9PHoqcXyVL1YcwPU2oo6Dt9URYLNd75pIpUzlJQv_93D03K8575l46deMx1vqeKmKkl0shPsP1tLPggxxpWXLCu9kT-VlSGzXYcZs34Vam3PIftnxxPEKCVb8MrIwM1MHWYpgPqnnKTA';

const sidebarNav: { Icon: LucideIcon; label: string; active: boolean; href: string }[] = [
  { Icon: Rocket, label: 'Getting Started', active: true, href: '#' },
  { Icon: GitBranch, label: 'Core Concepts', active: false, href: '#' },
  { Icon: Braces, label: 'API Reference', active: false, href: '#' },
  { Icon: Terminal, label: 'CLI Tool', active: false, href: '#' },
  { Icon: Puzzle, label: 'Figma Plugin', active: false, href: '#' },
  { Icon: Code2, label: 'Examples', active: false, href: '#' },
];

export default function DocsPageContent() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <div className="flex pt-16">
        <aside className="hidden md:flex h-[calc(100vh-4rem)] w-64 fixed left-0 top-16 flex-col py-8 gap-y-4 overflow-y-auto sidebar-scroll bg-obsidian-nav border-r border-white/5">
          <div className="px-6 mb-4">
            <h3 className="text-obsidian-gold font-body text-sm tracking-wide uppercase font-bold">v2.4.0-stable</h3>
            <p className="text-on-surface/40 text-[10px] uppercase tracking-[0.2em]">NexusUI · open source</p>
          </div>
          <nav className="flex flex-col gap-y-1" aria-label="Documentation">
            {sidebarNav.map(({ Icon, label, active, href }) => (
              <a
                key={label}
                href={href}
                className={
                  active
                    ? 'text-primary-container border-l-2 border-primary-container pl-4 bg-gradient-to-r from-primary-container/10 to-transparent font-body text-sm tracking-wide uppercase font-bold py-2 flex items-center gap-3'
                    : 'text-on-surface/60 pl-4 border-l-2 border-transparent hover:text-on-surface hover:bg-white/5 font-body text-sm tracking-wide uppercase font-bold py-2 flex items-center gap-3 transition-all duration-150 ease-in-out'
                }
              >
                <Icon className="size-5 shrink-0 opacity-90" strokeWidth={1.75} aria-hidden />
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/contributing"
              className="flex items-center gap-3 text-on-surface/60 hover:text-primary-container text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <HelpCircle className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              Contributing
            </Link>
            <Link
              href="/auth"
              className="flex items-center gap-3 text-on-surface/60 hover:text-primary-container text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <UserCircle className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              Sign in
            </Link>
          </div>
        </aside>

        <main className="flex w-full min-w-0 flex-1 md:ml-64">
          <div className="flex-1 max-w-4xl overflow-x-auto px-4 py-10 sm:px-6 md:px-12 md:py-16">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary-container font-bold">Documentation</span>
                <div className="h-px w-12 bg-primary-container/30" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold font-headline tracking-tighter text-on-surface mb-6">
                Getting Started with NexusUI
              </h1>
              <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl">
                Install NexusUI locally, add a Gemini API key, and turn screenshots into React + Tailwind — with Monaco editor and
                Sandpack preview in the app.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              <div className="p-6 bg-surface-container-low rounded-lg border-l-2 border-primary-container">
                <Zap className="size-8 text-primary-container mb-4" strokeWidth={1.75} aria-hidden />
                <h3 className="text-lg font-headline font-bold mb-2">Zero Configuration</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Clone the repo, run <code className="text-tertiary">npm install</code>, copy env — no extra design system to wire up
                  before your first upload.
                </p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-lg">
                <Sparkles className="size-8 text-tertiary mb-4" strokeWidth={1.75} aria-hidden />
                <h3 className="text-lg font-headline font-bold mb-2">Type-Safe Output</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Generated output is TypeScript-first React so you can tighten types and refactor like any hand-written component.
                </p>
              </div>
            </div>

            <section className="mb-16" id="installation">
              <h2 className="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">Installation</h2>
              <p className="mb-6 text-on-surface-variant leading-relaxed">
                Get the <span className="text-[#ffe0b0] font-bold">NexusUI</span> app running locally — Node 18+, Git, and a{' '}
                <span className="text-tertiary">GEMINI_API_KEY</span> for the generate API.
              </p>
              <div className="code-block rounded-lg p-1 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-surface-container-highest/30">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface/40 uppercase">Terminal</span>
                  <Copy className="size-4 text-on-surface/40 shrink-0" strokeWidth={1.75} aria-hidden />
                </div>
                <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
                  <code className="text-on-surface">
                    <span className="text-tertiary-fixed"># Clone &amp; install</span>
                    {'\n'}
                    <span className="text-primary-container">git</span> clone https://github.com/KOUSTAV2409/NexusUI.git{'\n'}
                    <span className="text-primary-container">cd</span> NexusUI{'\n'}
                    <span className="text-primary-container">npm</span> install{'\n'}
                    {'\n'}
                    <span className="text-tertiary-fixed"># Environment</span>
                    {'\n'}
                    <span className="text-primary-container">cp</span> .env.local.example .env.local{'\n'}
                    <span className="text-on-surface/50"># Add GEMINI_API_KEY, then:</span>
                    {'\n'}
                    <span className="text-primary-container">npm</span> run dev
                  </code>
                </pre>
              </div>
            </section>

            <section className="mb-16" id="initializing">
              <h2 className="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">Initializing</h2>
              <p className="mb-6 text-on-surface-variant leading-relaxed">
                Open <span className="text-[#ffe0b0] font-bold">http://localhost:3000</span> — upload a PNG or JPG on the home page.
                Session storage keeps generated code for preview in the same browser tab.
              </p>
              <div className="code-block rounded-lg p-1 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-surface-container-highest/30">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface/40 uppercase">Terminal</span>
                  <Copy className="size-4 text-on-surface/40 shrink-0" strokeWidth={1.75} aria-hidden />
                </div>
                <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
                  <code className="text-on-surface">
                    <span className="text-primary-container">npm</span> run dev{'\n'}
                    {'\n'}
                    <span className="text-on-surface/40">
                      → Next.js ready at localhost:3000{'\n'}→ Upload → Generate → Open /preview with stored code
                    </span>
                    {'\n'}
                    {'\n'}
                    <span className="text-tertiary-fixed">✓ API routes use your GEMINI_API_KEY server-side only.</span>
                  </code>
                </pre>
              </div>
            </section>

            <section className="mb-16" id="basic-usage">
              <h2 className="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">Basic Usage</h2>
              <p className="mb-6 text-on-surface-variant leading-relaxed">
                After generation, use <span className="text-tertiary font-bold">Preview</span> for Monaco + Sandpack, device frames,
                and copy — or export and drop the code into your own repo.
              </p>
              <div className="code-block rounded-lg p-1 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-surface-container-highest/30">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface/40 uppercase">Flow</span>
                  <Copy className="size-4 text-on-surface/40 shrink-0" strokeWidth={1.75} aria-hidden />
                </div>
                <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
                  <code className="text-on-surface">
                    <span className="text-on-surface/40">Home → Upload → Generate → /preview?sid=…</span>
                    {'\n'}
                    {'\n'}
                    <span className="text-tertiary-fixed">
                      → Edit TSX in the browser{'\n'}→ Resize preview · mobile / tablet / desktop
                    </span>
                  </code>
                </pre>
              </div>
              <div className="mt-8 p-6 bg-surface-container-low rounded-lg border-l-2 border-tertiary flex gap-4">
                <Info className="size-5 text-tertiary shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-tertiary mb-1">Developer note</h4>
                  <p className="text-sm text-on-surface-variant">
                    Tune prompts and models in the API route if you need stricter layout or longer output. See{' '}
                    <Link href="/contributing" className="text-tertiary underline">
                      Contributing
                    </Link>{' '}
                    for how to help.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16" id="configuration">
              <h2 className="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">Configuration</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Set <code className="text-primary-container">GEMINI_API_KEY</code> in <code className="text-tertiary">.env.local</code>.
                Optional: <code className="text-tertiary">NEXT_PUBLIC_BASE_URL</code> for production URLs.
              </p>
            </section>

            <section className="mb-16" id="troubleshooting">
              <h2 className="text-3xl font-headline font-bold text-primary-container mb-6 tracking-tight">Troubleshooting</h2>
              <p className="text-on-surface-variant leading-relaxed">
                If generation fails, check API quotas and that your key is valid. Empty preview usually means the session was cleared —
                regenerate from the home page in the same tab.
              </p>
            </section>

            <div className="h-64 w-full rounded-xl overflow-hidden relative mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" src={DOC_IMG} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.4em] font-bold text-primary-container">NexusUI</p>
              </div>
            </div>
          </div>

          <aside className="w-64 hidden xl:block border-l border-white/5 h-[calc(100vh-4rem)] sticky top-16 p-8 shrink-0">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/40 mb-6">On this page</h4>
            <nav className="flex flex-col gap-4" aria-label="On this page">
              <a className="text-xs font-medium text-primary-container border-l-2 border-primary-container pl-3" href="#installation">
                Installation
              </a>
              <a
                className="text-xs font-medium text-on-surface/60 hover:text-primary-container pl-3 border-l-2 border-transparent transition-colors"
                href="#initializing"
              >
                Initializing
              </a>
              <a
                className="text-xs font-medium text-on-surface/60 hover:text-primary-container pl-3 border-l-2 border-transparent transition-colors"
                href="#basic-usage"
              >
                Basic Usage
              </a>
              <a
                className="text-xs font-medium text-on-surface/60 hover:text-primary-container pl-3 border-l-2 border-transparent transition-colors"
                href="#configuration"
              >
                Configuration
              </a>
              <a
                className="text-xs font-medium text-on-surface/60 hover:text-primary-container pl-3 border-l-2 border-transparent transition-colors"
                href="#troubleshooting"
              >
                Troubleshooting
              </a>
            </nav>
            <div className="mt-12 pt-12 border-t border-white/5">
              <div className="p-4 bg-surface-container-highest rounded-lg">
                <p className="text-[10px] uppercase font-bold text-on-surface/30 mb-3">Community</p>
                <a
                  className="flex items-center gap-2 text-xs text-on-surface hover:text-tertiary transition-colors mb-2"
                  href="https://github.com/KOUSTAV2409/NexusUI/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  GitHub Discussions
                </a>
                <a
                  className="flex items-center gap-2 text-xs text-on-surface hover:text-tertiary transition-colors"
                  href="https://github.com/KOUSTAV2409/NexusUI/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Terminal className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  GitHub Issues
                </a>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
