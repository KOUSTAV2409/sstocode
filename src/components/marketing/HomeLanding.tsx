import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import UploadZone from '@/components/UploadZone';
import MarketingFooter from '@/components/marketing/MarketingFooter';

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD-y2YK4avasru6Etj_N8ksdDmgt20i-uHRSZMDaizUiJxfbGOuU8cQ0rJVyLI-QL4a6O80JbKggwNghhJ7NOv1EKiSuLDUcdLOMbfT8UWqaCxkGU1ieCG4lqcpbzG59YYeweSc8XgYss9cO6VFvjJnnSOAuKVYyp7tC5Uph1rLHRhiQwjfdrefzkSxFC-A3OlYkgYVwb2JrfbeTomd591DPDqH9EwhAXxL5Z0-A0l7hAtnjZnDDYp55_UKhgUMxXDrch6IITS2C9Cq';

function DashboardCodeMock() {
  return (
    <pre className="text-on-surface/80 text-sm leading-relaxed overflow-x-auto">
      <code>
        <span className="text-tertiary">export const</span> <span className="text-primary-container">Dashboard</span> = () =&gt; {'{'}
        {'\n'}
        <span className="text-tertiary">  return</span> (
        {'\n'}    &lt;<span className="text-primary-container">div</span> className=
        <span className="text-secondary">&quot;grid grid-cols-12 gap-6 bg-obsidian-900&quot;</span>&gt;
        {'\n'}      &lt;<span className="text-primary-container">aside</span> className=
        <span className="text-secondary">&quot;col-span-3 border-r border-white/5&quot;</span>&gt;
        {'\n'}        &lt;<span className="text-primary-container">NavMenu</span> items={'{data.links}'} /&gt;
        {'\n'}      &lt;/<span className="text-primary-container">aside</span>&gt;
        {'\n'}      &lt;<span className="text-primary-container">main</span> className=
        <span className="text-secondary">&quot;col-span-9 p-12 space-y-8&quot;</span>&gt;
        {'\n'}        &lt;<span className="text-primary-container">MetricsGrid</span> /&gt;
        {'\n'}        &lt;<span className="text-primary-container">ChartContainer</span> data={'{metrics}'} /&gt;
        {'\n'}      &lt;/<span className="text-primary-container">main</span>&gt;
        {'\n'}    &lt;/<span className="text-primary-container">div</span>&gt;
        {'\n  );\n};'}
      </code>
    </pre>
  );
}

const previewLines: { n: string; line: string; dim?: boolean; pl?: string }[] = [
  { n: '1', line: 'import { Button } from "@/components/ui/button"', dim: true },
  { n: '2', line: 'import { Card } from "@/components/ui/card"', dim: true },
  { n: '3', line: '', dim: true },
  { n: '4', line: 'export default function HeroSection() {' },
  { n: '5', line: '  return (', pl: 'pl-4' },
  { n: '6', line: '    <section className="relative px-6 pt-10">', pl: 'pl-8' },
  { n: '7', line: '      <div className="mx-auto max-w-2xl text-center">', pl: 'pl-12' },
  { n: '8', line: '        <h1 className="text-4xl font-bold tracking-tight">', pl: 'pl-16' },
  { n: '9', line: '          The future of development is visual', pl: 'pl-20' },
  { n: '10', line: '        </h1>', pl: 'pl-16' },
  { n: '11', line: '        <div className="mt-10 flex gap-x-6">', pl: 'pl-16' },
  { n: '12', line: '          <Button variant="primary">Get Started</Button>', pl: 'pl-20' },
  { n: '13', line: '        </div>', pl: 'pl-16' },
  { n: '14', line: '      </div>', pl: 'pl-12' },
  { n: '15', line: '    </section>', pl: 'pl-8' },
  { n: '16', line: '  )', pl: 'pl-4' },
  { n: '17', line: '}' },
];

export default function HomeLanding() {
  return (
    <div className="min-h-screen bg-void text-on-surface font-body selection:bg-primary-accent/30 selection:text-white">
      <main>
        {/* Crafted Hero Section */}
        <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48 md:pt-56">
          {/* Subtle grid lines instead of glowing orbs */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-12 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-ghost-border bg-surface-lowest/50 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-on-surface uppercase">FOR FAST MOVING ENGINEERING TEAMS</span>
            </div>
            
            <h1 className="font-sans text-5xl sm:text-6xl md:text-[5.5rem] font-bold leading-[1.05] tracking-tighter text-white mb-8">
              From Screenshot to <br className="hidden sm:block" />
              <span className="text-white relative">
                Production Code
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary-accent" />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface-muted leading-relaxed max-w-2xl mx-auto font-light mb-10">
              <strong className="text-white font-medium">NexusUI</strong> turns UI screenshots into editable React and Tailwind. 
              Upload a frame, generate code with Gemini, and refine in a live browser preview.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Link
                href="#upload"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-void bg-white rounded-full transition-transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                Upload a screenshot
              </Link>
              <Link
                href="/docs"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white bg-surface-high border border-ghost-border rounded-full transition-colors hover:bg-surface-highest"
              >
                Read the docs
              </Link>
            </div>
            
            <p className="mt-8 text-xs text-on-surface-muted">
              Prefer the terminal?{' '}
              <Link href="/contributing" className="text-primary-accent hover:text-white transition-colors font-medium">
                Clone and run locally
              </Link>
            </p>
          </div>
        </section>

        {/* Centered Upload Zone */}
        <section id="upload" className="relative pb-32 scroll-mt-32">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 md:px-12 relative z-10">
            <div className="diffuse-shadow rounded-2xl bg-surface-lowest border border-ghost-border p-2">
              <UploadZone />
            </div>
          </div>
        </section>

        <section className="bg-surface-lowest py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 w-full bg-surface-low border border-white/10 p-2 shadow-2xl rounded-xl relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none before:rounded-xl">
                {/* Physical MacOS window metaphor */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-surface-highest/20 rounded-t-lg">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="mx-auto text-[10px] font-mono font-bold tracking-widest text-on-surface-muted uppercase">source.png</div>
                </div>
                <div className="relative aspect-video overflow-hidden border-t border-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Source UI Screenshot"
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                    src={HERO_IMG}
                  />
                </div>
              </div>
              <div className="flex flex-none shrink-0 flex-col items-center justify-center gap-4 p-2 md:p-4">
                <ArrowRight
                  className="size-8 text-white/50 rotate-90 md:rotate-0 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
              <div className="min-w-0 flex-1 w-full overflow-x-auto bg-[#0d0d0d] border border-white/10 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none before:rounded-xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1a1a1a]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-on-surface-muted uppercase">page.tsx</div>
                  <div className="w-10" /> {/* Spacer */}
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <DashboardCodeMock />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-void">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 p-12 sm:p-16 bg-surface-low border border-ghost-border relative overflow-hidden group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="font-sans text-3xl font-bold mb-6 tracking-tighter text-white relative z-10">Instant Tailwind Styling</h3>
                <p className="text-on-surface-muted leading-relaxed text-lg font-light max-w-lg relative z-10">
                  Outputs map to Tailwind utilities so you stay in the design system — no mystery CSS blobs to untangle. Built directly for your codebase.
                </p>
                <div className="mt-12 inline-block font-mono text-xs font-bold uppercase tracking-widest text-primary-accent px-4 py-2 border border-primary-accent/20 rounded-full">Zero CSS Blobs</div>
              </div>
              <div className="md:col-span-4 p-12 sm:p-16 bg-void border border-ghost-border relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl">
                <h3 className="font-sans text-2xl font-bold mb-6 tracking-tighter text-white">Clean React</h3>
                <p className="text-on-surface-muted leading-relaxed text-base font-light">
                  Functional React with TypeScript, not pasted HTML. Components you can split, rename, and ship.
                </p>
              </div>
              <div className="md:col-span-12 p-16 sm:p-24 bg-[#0a0a0a] border border-ghost-border text-center flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-2xl">
                <h3 className="font-sans text-4xl sm:text-5xl font-bold mb-8 tracking-tighter text-white">Responsive by Default</h3>
                <p className="text-on-surface-muted leading-relaxed text-lg sm:text-xl font-light max-w-3xl">
                  The model infers layout intent from your screenshot — flex and grid patterns that scale effortlessly from mobile to massive desktop displays.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="mb-12 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-ghost-border bg-surface-lowest/50 backdrop-blur-md">
                <span className="font-mono text-[10px] font-semibold tracking-widest text-on-surface uppercase">DEVELOPER EXPERIENCE</span>
              </div>
              <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Deep Inspection</h2>
            </div>
            <div className="diffuse-shadow overflow-hidden border border-ghost-border rounded-2xl bg-surface-lowest">
              <div className="flex min-w-0 overflow-x-auto border-b border-ghost-border bg-surface-low [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <button
                  type="button"
                  className="shrink-0 border-r border-ghost-border px-6 py-4 text-xs font-mono font-bold tracking-widest text-primary-accent bg-surface"
                >
                  PREVIEW.TSX
                </button>
                <button
                  type="button"
                  className="shrink-0 border-r border-ghost-border px-6 py-4 text-xs font-bold tracking-widest text-on-surface-muted hover:text-white transition-colors"
                >
                  GLOBALS.CSS
                </button>
                <div className="min-w-2 flex-1" />
                <div className="flex shrink-0 items-center gap-4 px-6">
                  <Download
                    className="size-5 text-on-surface-muted cursor-pointer hover:text-white transition-colors"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
              </div>
              <div className="flex min-h-[min(600px,85vh)] flex-col lg:min-h-[600px] lg:flex-row">
                <div className="min-w-0 overflow-auto bg-void p-6 font-mono text-xs sm:p-8 lg:w-1/2">
                  <div className="flex flex-col gap-1">
                    {previewLines.map((row) => (
                      <div key={row.n} className={`flex min-w-0 gap-2 sm:gap-4 ${row.dim ? 'opacity-40' : ''}`}>
                        <span className="w-6 text-right shrink-0 tabular-nums text-on-surface-muted/30 select-none">{row.n}</span>
                        <span className={`min-w-0 break-all font-mono sm:break-normal text-on-surface ${row.pl ?? ''}`}>{row.line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stacked label + headline on mobile avoids absolute LIVE_RENDER overlapping the h2 */}
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-8 overflow-hidden bg-white p-8 sm:min-h-0 sm:p-12 lg:w-1/2">
                  <div className="shrink-0 flex justify-center">
                    <span className="inline-block rounded-full border border-black/10 bg-black/5 px-3 py-1.5 text-[10px] font-bold tracking-widest text-black/60 shadow-sm uppercase">
                      LIVE_RENDER
                    </span>
                  </div>
                  <div className="mx-auto w-full max-w-md text-center">
                    <h2 className="mb-8 text-2xl font-sans font-bold leading-tight tracking-tight text-void sm:text-4xl">
                      THE FUTURE OF DEVELOPMENT IS VISUAL
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                      <div className="bg-primary-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-white rounded-full shadow-[0_0_30px_-5px_rgba(255,126,95,0.4)] hover:scale-105 transition-transform cursor-pointer">GET STARTED</div>
                      <div className="border border-void/20 px-8 py-3.5 text-sm font-semibold tracking-wide text-void rounded-full hover:bg-void/5 transition-colors cursor-pointer">
                        LEARN MORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 bg-void relative overflow-hidden border-t border-ghost-border">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_100%,#000_20%,transparent_100%)] pointer-events-none" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <div className="relative overflow-hidden text-center sm:p-20 md:p-28">
              <h2 className="relative z-10 mb-8 font-sans text-5xl font-bold tracking-tighter break-words sm:text-6xl md:text-7xl text-white">
                READY TO SHIP
                <br />
                FROM SCREENSHOTS?
              </h2>
              <p className="relative z-10 mx-auto mb-12 max-w-2xl px-1 text-lg text-on-surface-muted sm:text-xl font-light">
                Clone NexusUI, add your Gemini key, and go from mockup to React + Tailwind in one flow. Open source and built for builders.
              </p>
              <div className="relative z-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-4">
                <Link
                  href="/contributing"
                  className="metallic-luster inline-block px-10 py-4 text-center text-sm font-semibold tracking-wide text-white hover:opacity-90 rounded-full shadow-lg"
                >
                  Contribute or run locally
                </Link>
                <a
                  href="mailto:koustavganguly24@gmail.com"
                  className="inline-block bg-surface-high border border-ghost-border px-10 py-4 text-center text-sm font-semibold tracking-wide text-white transition-colors hover:bg-surface-highest rounded-full"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
