import Link from 'next/link';
import { ArrowLeft, CheckCircle, Circle, Clock } from 'lucide-react';

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">sstocode Roadmap</h1>
          <p className="text-zinc-400 text-lg">Our vision for the future of AI-powered design to code</p>
        </div>

        {/* Current Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Current Status
          </h2>
          <div className="grid gap-3">
            {[
              'Basic AI-powered design to code generation',
              'Image upload and processing',
              'Live preview with code editor',
              'Clean preview interface without main header',
              'Copy code functionality',
              'Responsive design'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900/50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Phase 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-500" />
            Phase 1: Core Features Enhancement
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-blue-400">Preview Page Improvements</h3>
              <div className="grid gap-3">
                {[
                  'Settings Panel - Device preview modes, theme switching, zoom controls',
                  'Code Improvement - AI-powered code refinement with user prompts',
                  'Export Options - Download as ZIP, copy individual files',
                  'Component Library - Save and reuse generated components'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900/30 rounded-lg">
                    <Circle className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 text-blue-400">AI Generation Enhancement</h3>
              <div className="grid gap-3">
                {[
                  'Multiple AI Providers - Add Claude, GPT-4, local models',
                  'Generation Options - Framework selection (React, Vue, Svelte)',
                  'Style Frameworks - Tailwind, CSS Modules, Styled Components',
                  'Component Types - Specify component complexity and features'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900/30 rounded-lg">
                    <Circle className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Future Phases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Future Phases</h2>
          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-purple-400">Phase 2: User Experience</h3>
              <p className="text-zinc-400">Authentication, collaboration features, advanced editor, team workspaces</p>
            </div>
            <div className="p-6 bg-zinc-900/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-purple-400">Phase 3: Platform Features</h3>
              <p className="text-zinc-400">REST API, webhooks, CLI tool, VS Code extension, enterprise features</p>
            </div>
            <div className="p-6 bg-zinc-900/30 rounded-lg">
              <h3 className="text-xl font-medium mb-2 text-purple-400">Phase 4: Ecosystem</h3>
              <p className="text-zinc-400">Plugin system, template marketplace, mobile apps, community features</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center p-8 bg-zinc-900/30 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Questions or Suggestions?</h2>
          <p className="text-zinc-400 mb-6">Have ideas for the roadmap or want to discuss priorities?</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:koustavganguly24@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              Email
            </a>
            <a href="https://iamk.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              Website
            </a>
            <a href="https://x.com/iamk_xyz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
