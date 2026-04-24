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
        {/* pt: clear fixed header (h-16) + breathing room — was pt-12 and overlapped nav on small screens */}
        <section className="relative overflow-hidden pb-32 pt-24 sm:pt-28 md:pt-32">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
            <div className="mb-16 text-center sm:mb-24">
              <h1 className="mb-8 font-headline text-4xl font-bold leading-[0.95] tracking-tighter text-on-surface break-words sm:text-5xl md:text-7xl md:leading-[0.9] lg:text-8xl">
                From Screenshot to
                <br />
                <span className="text-primary-container">Production-Ready Code</span>
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="space-y-10">
                <p className="text-xl text-on-surface/70 leading-relaxed max-w-lg">
                  <strong className="text-on-surface">NexusUI</strong> turns UI screenshots into editable React and Tailwind —
                  upload a frame, generate code with Gemini, then refine in the browser with a live preview.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Link
                    href="#upload"
                    className="metallic-luster inline-block px-8 py-3 text-center text-base font-bold tracking-tight text-on-primary transition-opacity hover:opacity-90 sm:px-10 sm:py-4 sm:text-lg"
                  >
                    Upload a screenshot
                  </Link>
                  <Link
                    href="/docs"
                    className="inline-block bg-surface-bright px-8 py-3 text-center text-base font-bold tracking-tight text-on-surface transition-colors hover:bg-surface-container-high sm:px-10 sm:py-4 sm:text-lg"
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
              <div id="upload" className="relative scroll-mt-32">
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
              <div className="min-w-0 flex-1 w-full overflow-x-auto bg-[#001111] p-4 font-mono text-sm leading-relaxed sm:p-6">
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
            <div className="obsidian-glass overflow-hidden border border-white/5">
              <div className="flex min-w-0 overflow-x-auto border-b border-white/5 bg-surface-container [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <button
                  type="button"
                  className="shrink-0 border-r border-white/5 px-4 py-3 text-xs font-bold tracking-widest text-primary-container sm:px-8 sm:py-4"
                >
                  PREVIEW.TSX
                </button>
                <button
                  type="button"
                  className="shrink-0 border-r border-white/5 px-4 py-3 text-xs font-bold tracking-widest text-on-surface/40 hover:text-on-surface sm:px-8 sm:py-4"
                >
                  GLOBALS.CSS
                </button>
                <div className="min-w-2 flex-1" />
                <div className="flex shrink-0 items-center gap-3 px-3 sm:gap-4 sm:px-6">
                  <Download
                    className="size-5 text-on-surface/40 cursor-pointer hover:text-on-surface transition-colors"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
              </div>
              <div className="flex min-h-[min(600px,85vh)] flex-col lg:min-h-[600px] lg:flex-row">
                <div className="min-w-0 overflow-auto bg-surface-container-lowest p-4 font-mono text-xs sm:p-8 lg:w-1/2">
                  <div className="flex flex-col gap-1">
                    {previewLines.map((row) => (
                      <div key={row.n} className={`flex min-w-0 gap-2 sm:gap-4 ${row.dim ? 'opacity-40' : ''}`}>
                        <span className="w-4 shrink-0 tabular-nums">{row.n}</span>
                        <span className={`min-w-0 break-all font-mono sm:break-normal ${row.pl ?? ''}`}>{row.line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Stacked label + headline on mobile avoids absolute LIVE_RENDER overlapping the h2 */}
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-6 overflow-hidden bg-white p-6 sm:min-h-0 sm:gap-8 sm:p-12 lg:w-1/2">
                  <div className="shrink-0">
                    <span className="inline-block rounded-sm bg-surface-container-lowest px-2 py-1 text-[10px] font-bold tracking-widest text-on-surface">
                      LIVE_RENDER
                    </span>
                  </div>
                  <div className="mx-auto w-full max-w-md text-center">
                    <h2 className="mb-6 text-xl font-black leading-tight tracking-tighter text-[#001717] sm:mb-8 sm:text-3xl sm:leading-none md:text-5xl">
                      THE FUTURE OF DEVELOPMENT IS VISUAL
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                      <div className="bg-[#001717] px-6 py-2.5 text-sm font-bold text-white sm:px-8 sm:py-3">GET STARTED</div>
                      <div className="border-2 border-[#001717] px-6 py-2.5 text-sm font-bold text-[#001717] sm:px-8 sm:py-3">
                        LEARN MORE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="relative overflow-hidden bg-surface-container p-6 text-center sm:p-12 md:p-20">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent" />
              <h2 className="relative z-10 mb-6 font-headline text-3xl font-bold tracking-tighter break-words sm:mb-8 sm:text-4xl md:text-6xl">
                READY TO SHIP
                <br />
                FROM SCREENSHOTS?
              </h2>
              <p className="relative z-10 mx-auto mb-10 max-w-2xl px-1 text-base text-on-surface/60 sm:mb-12 sm:text-lg">
                Clone NexusUI, add your Gemini key, and go from mockup to React + Tailwind in one flow — open source and built for
                builders.
              </p>
              <div className="relative z-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contributing"
                  className="metallic-luster inline-block px-8 py-4 text-center text-lg font-bold tracking-tight text-on-primary hover:opacity-90 sm:px-12 sm:py-5 sm:text-xl"
                >
                  Contribute or run locally
                </Link>
                <a
                  href="mailto:koustavganguly24@gmail.com"
                  className="inline-block bg-surface-bright px-8 py-4 text-center text-lg font-bold tracking-tight text-on-surface transition-colors hover:bg-surface-container-high sm:px-12 sm:py-5 sm:text-xl"
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
