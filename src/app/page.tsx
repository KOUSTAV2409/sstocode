import UploadZone from '@/components/UploadZone';
import HowItWorks from '@/components/HowItWorks';
import OnboardingModal from '@/components/OnboardingModal';
import { Zap, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <OnboardingModal />

      {/* Hero Section - with subtle gradient */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            Design to Code.
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Transform your UI designs into production-ready React components with AI precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#upload"
              className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-violet-500/25"
            >
              Try it now
            </a>
            <Link
              href="/roadmap"
              className="border border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="py-16 md:py-20 px-4 md:px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <UploadZone />
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Features */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Fast Generation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Generate production-ready components in seconds with advanced AI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Clean Code</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                TypeScript, Tailwind CSS, and modern React patterns included.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">AI Precision</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Advanced computer vision for pixel-perfect accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to ship?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Start building with AI-powered code generation.
          </p>
          <a
            href="#upload"
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-violet-500/25"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-black" viewBox="0 0 76 65" fill="currentColor">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
            </div>
            <span className="font-medium">sstocode</span>
          </div>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://github.com/KOUSTAV2409/sstocode" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}