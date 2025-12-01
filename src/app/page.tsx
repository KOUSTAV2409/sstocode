import UploadZone from '@/components/UploadZone';
import { Zap, Code2, Sparkles, Github, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
              Convert Designs to Code
              <span className="block text-slate-500 text-4xl lg:text-5xl font-normal mt-2">
                in seconds
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Upload a UI screenshot and let AI generate clean, production-ready React components with TypeScript and Tailwind CSS.
            </p>
          </div>

          <UploadZone />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 border-t border-slate-200 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">
            Why choose DevForge?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-600">
                Generate production-ready components in seconds, not hours.
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Clean Code</h3>
              <p className="text-slate-600">
                TypeScript, Tailwind CSS, and modern React patterns included.
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Precision</h3>
              <p className="text-slate-600">
                Advanced vision models ensure pixel-perfect accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-600 mb-6">
            Open source and free to use. Built for developers.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-slate-600 transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}