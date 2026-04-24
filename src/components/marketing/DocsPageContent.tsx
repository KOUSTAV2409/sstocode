'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
];

export default function DocsPageContent() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-void text-on-surface font-sans">
      <div className="flex pt-20">
        <aside className="hidden md:flex h-[calc(100vh-5rem)] w-64 fixed left-0 top-20 flex-col py-8 gap-y-4 overflow-y-auto sidebar-scroll bg-surface-low border-r border-ghost-border">
          <div className="px-6 mb-4 mt-2">
            <h3 className="text-white font-sans text-sm font-semibold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-accent" />
              NexusUI Platform
            </h3>
          </div>
          <div className="px-4 mb-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="w-full bg-surface border border-ghost-border rounded-md px-3 py-1.5 text-sm text-on-surface placeholder:text-on-surface-muted focus:outline-none focus:border-primary-accent transition-colors"
              />
              <div className="absolute right-2 top-1.5 flex items-center gap-1">
                <kbd className="hidden sm:inline-block bg-surface-high border border-ghost-border rounded px-1.5 font-mono text-[10px] text-on-surface-muted">⌘</kbd>
                <kbd className="hidden sm:inline-block bg-surface-high border border-ghost-border rounded px-1.5 font-mono text-[10px] text-on-surface-muted">K</kbd>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-y-0.5 px-4" aria-label="Documentation">
            {sidebarNav.map(({ Icon, label, active, href }) => (
              <a
                key={label}
                href={href}
                className={
                  active
                    ? 'text-primary-accent bg-primary-accent/10 font-sans text-sm font-medium py-1.5 px-3 rounded-md flex items-center gap-2.5'
                    : 'text-on-surface-muted hover:text-white hover:bg-surface-high font-sans text-sm font-medium py-1.5 px-3 rounded-md flex items-center gap-2.5 transition-colors'
                }
              >
                <Icon className="size-4 shrink-0" strokeWidth={2} aria-hidden />
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex w-full min-w-0 flex-1 md:ml-64 pt-4">
          <div className="flex-1 max-w-4xl overflow-x-auto px-4 py-10 sm:px-6 md:px-12 md:py-16">
            <div className="mb-12">
              <h1 className="text-4xl font-bold font-sans tracking-tight text-white mb-4">
                Introduction
              </h1>
              <p className="text-lg text-on-surface-muted font-light leading-relaxed max-w-2xl">
                NexusUI is an AI-powered visual development platform. We transform your UI mockups, screenshots, and wireframes directly into production-ready React code, complete with Tailwind CSS styling and automated component architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="p-6 bg-surface-lowest border border-ghost-border rounded-xl">
                <Zap className="size-6 text-primary-accent mb-4" strokeWidth={2} aria-hidden />
                <h3 className="text-lg font-sans font-semibold mb-2 text-white">Instant Feedback Loop</h3>
                <p className="text-sm text-on-surface-muted leading-relaxed font-light">
                  Unlike raw LLMs, NexusUI provides a live, interactive preview of your generated code instantly via Sandpack.
                </p>
              </div>
              <div className="p-6 bg-surface-lowest border border-ghost-border rounded-xl">
                <Sparkles className="size-6 text-primary-accent mb-4" strokeWidth={2} aria-hidden />
                <h3 className="text-lg font-sans font-semibold mb-2 text-white">Component Architecture</h3>
                <p className="text-sm text-on-surface-muted leading-relaxed font-light">
                  Our specialized agent pipeline perfectly structures your code for modern frameworks like Next.js, splitting components automatically.
                </p>
              </div>
            </div>

            <section className="mb-12" id="installation">
              <h2 className="text-2xl font-sans font-semibold text-white mb-4 tracking-tight border-b border-ghost-border pb-2">Installation</h2>
              <p className="mb-4 text-on-surface-muted leading-relaxed font-light text-base">
                To get started with the NexusUI platform locally, ensure you have Node.js 18+ installed and a valid Gemini API Key.
              </p>
              <div className="bg-[#0d0d0d] border border-white/10 rounded-lg overflow-hidden my-6 shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-white/5">
                  <span className="text-xs font-mono text-on-surface-muted">Terminal</span>
                  <Copy className="size-4 text-on-surface-muted hover:text-white transition-colors cursor-pointer shrink-0" />
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-on-surface font-mono">
                    <span className="text-[#a3a3a3]"># Clone the repository</span>
                    {'\n'}
                    <span className="text-[#ff7e5f]">git</span> clone https://github.com/KOUSTAV2409/NexusUI.git{'\n'}
                    <span className="text-[#ff7e5f]">cd</span> NexusUI{'\n'}
                    <span className="text-[#ff7e5f]">npm</span> install{'\n'}
                    {'\n'}
                    <span className="text-[#a3a3a3]"># Setup Environment Variables</span>
                    {'\n'}
                    <span className="text-[#ff7e5f]">cp</span> .env.local.example .env.local{'\n'}
                    {'\n'}
                    <span className="text-[#a3a3a3]"># Start the development server</span>
                    {'\n'}
                    <span className="text-[#ff7e5f]">npm</span> run dev
                  </code>
                </pre>
              </div>
            </section>

            <section className="mb-12" id="initializing">
              <h2 className="text-2xl font-sans font-semibold text-white mb-4 tracking-tight border-b border-ghost-border pb-2">Creating your first UI</h2>
              <p className="mb-4 text-on-surface-muted leading-relaxed font-light text-base">
                Once the server is running, navigate to <code className="bg-surface-high px-1.5 py-0.5 rounded-sm font-mono text-sm">http://localhost:3000</code>. Simply drag and drop a screenshot into the upload zone. Our Multi-Agent Pipeline will analyze the design and begin generation immediately.
              </p>
              <div className="bg-surface-lowest border border-ghost-border rounded-xl diffuse-shadow overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-surface border-b border-ghost-border">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-muted uppercase">Terminal</span>
                  <Copy className="size-4 text-on-surface-muted hover:text-white transition-colors cursor-pointer shrink-0" strokeWidth={1.75} aria-hidden />
                </div>
                <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
                  <code className="text-on-surface font-mono">
                    <span className="text-primary-accent">npm</span> run dev{'\n'}
                    {'\n'}
                    <span className="text-on-surface-muted">
                      → Next.js ready at localhost:3000{'\n'}→ Upload → Generate → Open /preview with stored code
                    </span>
                    {'\n'}
                    {'\n'}
                    <span className="text-on-surface-muted">✓ API routes use your GEMINI_API_KEY server-side only.</span>
                  </code>
                </pre>
              </div>
            </section>

            <section className="mb-16" id="basic-usage">
              <h2 className="text-3xl font-sans font-bold text-white mb-6 tracking-tight">Basic Usage</h2>
              <p className="mb-6 text-on-surface-muted leading-relaxed font-light text-lg">
                After generation, use <span className="text-white font-bold">Preview</span> for Monaco + Sandpack, device frames,
                and copy — or export and drop the code into your own repo.
              </p>
              <div className="bg-surface-lowest border border-ghost-border rounded-xl diffuse-shadow overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-surface border-b border-ghost-border">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-muted uppercase">Flow</span>
                  <Copy className="size-4 text-on-surface-muted hover:text-white transition-colors cursor-pointer shrink-0" strokeWidth={1.75} aria-hidden />
                </div>
                <pre className="p-6 text-sm leading-relaxed overflow-x-auto">
                  <code className="text-on-surface font-mono">
                    <span className="text-on-surface-muted">Home → Upload → Generate → /preview?sid=…</span>
                    {'\n'}
                    {'\n'}
                    <span className="text-on-surface-muted">
                      → Edit TSX in the browser{'\n'}→ Resize preview · mobile / tablet / desktop
                    </span>
                  </code>
                </pre>
              </div>
              <div className="mt-8 p-6 bg-surface border border-ghost-border rounded-2xl flex gap-4 diffuse-shadow">
                <Info className="size-5 text-primary-accent shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 font-mono">Developer note</h4>
                  <p className="text-sm text-on-surface-muted leading-relaxed font-light">
                    Tune prompts and models in the API route if you need stricter layout or longer output. See{' '}
                    <Link href="/contributing" className="text-primary-accent hover:text-white transition-colors underline underline-offset-2">
                      Contributing
                    </Link>{' '}
                    for how to help.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16" id="configuration">
              <h2 className="text-3xl font-sans font-bold text-white mb-6 tracking-tight">Configuration</h2>
              <p className="text-on-surface-muted leading-relaxed font-light text-lg mb-4">
                Set <code className="text-white font-mono bg-surface-high px-1.5 py-0.5 rounded-sm">GEMINI_API_KEY</code> in <code className="text-white font-mono bg-surface-high px-1.5 py-0.5 rounded-sm">.env.local</code>.
                Optional: <code className="text-white font-mono bg-surface-high px-1.5 py-0.5 rounded-sm">NEXT_PUBLIC_BASE_URL</code> for production URLs.
              </p>
            </section>

            <section className="mb-16" id="troubleshooting">
              <h2 className="text-3xl font-sans font-bold text-white mb-6 tracking-tight">Troubleshooting</h2>
              <p className="text-on-surface-muted leading-relaxed font-light text-lg">
                If generation fails, check API quotas and that your key is valid. Empty preview usually means the session was cleared —
                regenerate from the home page in the same tab.
              </p>
            </section>

            <div className="h-64 w-full rounded-2xl overflow-hidden relative mb-16 border border-ghost-border diffuse-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" src={DOC_IMG} />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.4em] font-bold text-white">NexusUI</p>
              </div>
            </div>
          </div>

            <aside className="w-64 hidden xl:block border-l border-ghost-border h-[calc(100vh-5rem)] sticky top-20 p-6 shrink-0 bg-void">
            <h4 className="text-xs font-semibold text-white mb-4">On this page</h4>
            <nav className="flex flex-col gap-2.5" aria-label="On this page">
              <a 
                className={`text-sm transition-colors ${activeSection === 'installation' ? 'text-primary-accent' : 'text-on-surface-muted hover:text-white'}`} 
                href="#installation"
              >
                Installation
              </a>
              <a
                className={`text-sm transition-colors ${activeSection === 'initializing' ? 'text-primary-accent' : 'text-on-surface-muted hover:text-white'}`}
                href="#initializing"
              >
                Creating your first UI
              </a>
              <a
                className={`text-sm transition-colors ${activeSection === 'basic-usage' ? 'text-primary-accent' : 'text-on-surface-muted hover:text-white'}`}
                href="#basic-usage"
              >
                Basic Usage
              </a>
              <a
                className={`text-sm transition-colors ${activeSection === 'configuration' ? 'text-primary-accent' : 'text-on-surface-muted hover:text-white'}`}
                href="#configuration"
              >
                Configuration
              </a>
            </nav>
            <div className="mt-12 pt-12 border-t border-ghost-border">
              <div className="p-5 bg-surface-lowest border border-ghost-border rounded-xl diffuse-shadow">
                <p className="text-[10px] uppercase font-bold text-on-surface-muted mb-4 tracking-widest">Community</p>
                <a
                  className="flex items-center gap-3 text-sm font-medium text-on-surface-muted hover:text-white transition-colors mb-3"
                  href="https://github.com/KOUSTAV2409/NexusUI/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  GitHub Discussions
                </a>
                <a
                  className="flex items-center gap-3 text-sm font-medium text-on-surface-muted hover:text-white transition-colors"
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
