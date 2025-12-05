import UploadZone from '@/components/UploadZone';
import { ArrowRight, Zap, Code2, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Design to Code.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your UI designs into production-ready React components with AI precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
              New Features coming soon ...
            </button>
            <button className="border border-gray-700 text-white px-6 py-3 rounded-md font-medium hover:border-gray-500 transition-colors">
              New Features coming soon ...
            </button>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <UploadZone />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Fast Generation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate production-ready components in seconds with advanced AI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                TypeScript, Tailwind CSS, and modern React patterns included.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-3">AI Precision</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Advanced computer vision for pixel-perfect accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to ship?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start building with AI-powered code generation.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6">
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