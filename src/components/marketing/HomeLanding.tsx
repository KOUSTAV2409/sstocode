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
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <main>
        <section className="relative pt-12 sm:pt-16 md:pt-20 pb-32 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-24">
              <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9] mb-8">
                From Screenshot to
                <br />
                <span className="text-primary-container">Production-Ready Code</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-10">
                <p className="text-xl text-on-surface/70 leading-relaxed max-w-lg">
                  <strong className="text-on-surface">sstocode</strong> turns UI screenshots into editable React and Tailwind —
                  upload a frame, generate code with Gemini, then refine in the browser with a live preview.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href="#upload"
                    className="metallic-luster text-on-primary px-10 py-4 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity inline-block text-center"
                  >
                    Upload a screenshot
                  </Link>
                  <Link
                    href="/docs"
                    className="bg-surface-bright text-on-surface px-10 py-4 font-bold text-lg tracking-tight hover:bg-surface-container-high transition-colors inline-block text-center"
                  >
                    Read the docs
                  </Link>
                </div>
                <p className="text-sm text-on-surface/45">
                  Prefer the terminal?{' '}
                  <Link href="/contributing" className="text-primary-container hover:underline font-medium">
                    Clone and run locally
                  </Link>
                  .
                </p>
              </div>
              <div id="upload" className="relative scroll-mt-28">
                <p className="sr-only">Upload a UI screenshot to generate React code</p>
                <div className="rounded-sm border border-outline-variant/20 bg-surface-container-low/50 p-3 md:p-4">
                  <UploadZone />
                </div>
                <div className="absolute -bottom-4 -right-2 md:-right-4 obsidian-glass px-4 py-3 border border-white/5 hidden sm:block pointer-events-none">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
                    <span className="text-xs font-bold tracking-widest text-on-surface/80">READY TO GENERATE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 w-full bg-surface-container p-2 shadow-2xl">
                <div className="relative aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    src={HERO_IMG}
                  />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest text-[#ffe0b0]">
                    UI_SOURCE_01
                  </div>
                </div>
              </div>
              <div className="flex flex-none shrink-0 flex-col items-center justify-center gap-2 p-2 md:p-4">
                <ArrowRight
                  className="size-8 text-primary-container rotate-90 md:rotate-0 shrink-0"
                  strokeWidth={2}
                  aria-hidden
                />
                <div className="h-px w-16 md:w-24 bg-linear-to-r from-transparent via-primary-container/30 to-transparent hidden md:block" />
              </div>
              <div className="flex-1 w-full bg-[#001111] p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-error/40" />
                  <div className="w-3 h-3 rounded-full bg-primary-container/40" />
                  <div className="w-3 h-3 rounded-full bg-tertiary/40" />
                </div>
                <DashboardCodeMock />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="p-12 border-r border-white/5 bg-surface-container-lowest">
                <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Instant Tailwind Styling</h3>
                <p className="text-on-surface/60 leading-relaxed text-sm">
                  Outputs map to Tailwind utilities so you stay in the design system — no mystery CSS blobs to untangle.
                </p>
              </div>
              <div className="p-12 border-r border-white/5 bg-surface-container-low">
                <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Clean React Components</h3>
                <p className="text-on-surface/60 leading-relaxed text-sm">
                  Functional React with TypeScript, not pasted HTML — components you can split, rename, and ship.
                </p>
              </div>
              <div className="p-12 bg-surface-container-lowest">
                <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight">Responsive by Default</h3>
                <p className="text-on-surface/60 leading-relaxed text-sm">
                  The model infers layout intent from your screenshot — flex and grid patterns that scale from mobile to desktop.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Deep Inspection</h2>
              <div className="w-12 h-1 bg-primary-container" />
            </div>
            <div className="obsidian-glass border border-white/5 overflow-hidden">
              <div className="flex border-b border-white/5 bg-surface-container">
                <button type="button" className="px-8 py-4 text-xs font-bold tracking-widest text-primary-container border-r border-white/5">
                  PREVIEW.TSX
                </button>
                <button
                  type="button"
                  className="px-8 py-4 text-xs font-bold tracking-widest text-on-surface/40 hover:text-on-surface border-r border-white/5"
                >
                  GLOBALS.CSS
                </button>
                <div className="flex-1" />
                <div className="flex items-center gap-4 px-6">
                  <Download
                    className="size-5 text-on-surface/40 cursor-pointer hover:text-on-surface transition-colors"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row min-h-[600px]">
                <div className="lg:w-1/2 p-8 bg-surface-container-lowest font-mono text-xs overflow-auto">
                  <div className="flex flex-col gap-1">
                    {previewLines.map((row) => (
                      <div key={row.n} className={`flex gap-4 ${row.dim ? 'opacity-40' : ''}`}>
                        <span className="w-4">{row.n}</span>
                        <span className={row.pl}>{row.line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 bg-white flex items-center justify-center p-12 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-surface-container-lowest text-on-surface px-3 py-1 text-[10px] font-bold tracking-widest">
                    LIVE_RENDER
                  </div>
                  <div className="text-center w-full max-w-md">
                    <h2 className="text-[#001717] text-3xl sm:text-5xl font-black tracking-tighter leading-none mb-8">
                      THE FUTURE OF DEVELOPMENT IS VISUAL
                    </h2>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <div className="bg-[#001717] text-white px-8 py-3 font-bold text-sm">GET STARTED</div>
                      <div className="border-2 border-[#001717] text-[#001717] px-8 py-3 font-bold text-sm">LEARN MORE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="bg-surface-container p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent pointer-events-none" />
              <h2 className="font-headline text-4xl sm:text-6xl font-bold tracking-tighter mb-8 relative z-10">
                READY TO SHIP
                <br />
                FROM SCREENSHOTS?
              </h2>
              <p className="text-on-surface/60 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                Clone sstocode, add your Gemini key, and go from mockup to React + Tailwind in one flow — open source and built for
                builders.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link
                  href="/contributing"
                  className="metallic-luster text-on-primary px-12 py-5 font-bold text-xl tracking-tight hover:opacity-90 inline-block text-center"
                >
                  Contribute or run locally
                </Link>
                <a
                  href="mailto:koustavganguly24@gmail.com"
                  className="bg-surface-bright text-on-surface px-12 py-5 font-bold text-xl tracking-tight hover:bg-surface-container-high transition-colors inline-block text-center"
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
