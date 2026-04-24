import Link from 'next/link';
import { ArrowLeft, Code, Users, Zap, Shield } from 'lucide-react';
import MarketingFooter from '@/components/marketing/MarketingFooter';

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-void text-white font-sans selection:bg-primary-accent selection:text-void flex flex-col">
      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-28 pb-16 flex-1 w-full">
        <div className="mb-10 flex flex-col gap-5">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Back to Home
          </Link>
          <div className="inline-block w-fit py-1.5 px-4 bg-surface-highest border border-ghost-border rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-accent">
              Open source
            </span>
          </div>
          <h1 className="font-sans text-4xl font-bold tracking-tight text-white md:text-5xl">
            Contributing to <span className="text-primary-accent">NexusUI</span>
          </h1>
          <p className="text-on-surface-muted text-lg font-light">
            NexusUI is an open source app: screenshots → React + Tailwind with Gemini, Monaco, and Sandpack. Help us improve
            prompts, UI, and docs.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-muted" aria-label="Site sections">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/roadmap" className="hover:text-white transition-colors">
              Roadmap
            </Link>
            <Link href="/auth" className="hover:text-white transition-colors">
              Auth
            </Link>
            <a
              href="https://github.com/KOUSTAV2409/NexusUI"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>

        <section className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-6 text-white">Quick start</h2>
          <div className="bg-surface-lowest border border-ghost-border rounded-3xl p-6 diffuse-shadow">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2 text-white">Prerequisites</h3>
                <p className="text-on-surface-muted font-light">Node.js 18+, Git, Gemini API key</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-white">Setup</h3>
                <pre className="bg-void border border-ghost-border p-4 rounded-xl text-sm overflow-x-auto text-white/80">
{`git clone https://github.com/KOUSTAV2409/NexusUI.git
cd NexusUI
npm install
cp .env.local.example .env.local
# Add GEMINI_API_KEY (and/or OPENROUTER_API_KEY / MISTRAL_API_KEY) to .env.local
npm run dev`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-6 text-white">Contribution areas</h2>
          <div className="grid gap-6">
            <div className="p-8 bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-sans font-bold text-emerald-400">Beginner friendly</h3>
              </div>
              <ul className="space-y-2 text-on-surface-muted font-light">
                <li>• UI improvements and styling fixes</li>
                <li>• Documentation updates and tutorials</li>
                <li>• Bug fixes and error message improvements</li>
                <li>• Testing and quality assurance</li>
              </ul>
            </div>

            <div className="p-8 bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary-accent" />
                <h3 className="text-xl font-sans font-bold text-primary-accent">Intermediate</h3>
              </div>
              <ul className="space-y-2 text-on-surface-muted font-light">
                <li>• New feature implementation</li>
                <li>• AI provider integrations</li>
                <li>• Performance optimizations</li>
                <li>• API development and endpoints</li>
              </ul>
            </div>

            <div className="p-8 bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-secondary-accent" />
                <h3 className="text-xl font-sans font-bold text-secondary-accent">Advanced</h3>
              </div>
              <ul className="space-y-2 text-on-surface-muted font-light">
                <li>• Architecture improvements</li>
                <li>• Security enhancements</li>
                <li>• Infrastructure and CI/CD</li>
                <li>• Complex feature development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-6 text-white">Development guidelines</h2>
          <div className="space-y-6">
            <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8">
              <h3 className="font-bold mb-3 text-white">Code style</h3>
              <ul className="space-y-2 text-on-surface-muted font-light">
                <li>• Use TypeScript for all new code</li>
                <li>• Follow existing naming conventions</li>
                <li>• Use Tailwind CSS for styling</li>
                <li>• Keep components small and focused</li>
              </ul>
            </div>

            <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8">
              <h3 className="font-bold mb-3 text-white">Pull request process</h3>
              <ol className="space-y-2 text-on-surface-muted font-light list-decimal list-inside">
                <li>Fork and create a feature branch</li>
                <li>Make your changes with tests</li>
                <li>Ensure all checks pass</li>
                <li>Submit PR with clear description</li>
                <li>Address review feedback</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-sans text-2xl font-bold mb-6 flex items-center gap-2 text-white">
            <Users className="w-6 h-6 text-primary-accent" />
            Community
          </h2>
          <div className="bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl p-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2 text-white">Communication</h3>
                <ul className="space-y-1 text-on-surface-muted font-light">
                  <li>• GitHub Issues for bugs and features</li>
                  <li>• GitHub Discussions for questions</li>
                  <li>• Real-time chat (coming soon)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-white">Need help?</h3>
                <p className="text-on-surface-muted font-light mb-3">If you have any problems or questions:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:koustavganguly24@gmail.com" className="text-primary-accent hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                    Email
                  </a>
                  <a href="https://iamk.xyz" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                    Website
                  </a>
                  <a href="https://x.com/iamk_xyz" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center p-8 md:p-12 bg-surface-lowest border border-ghost-border diffuse-shadow rounded-3xl">
          <h2 className="font-sans text-2xl font-bold mb-4 text-white">Ready to contribute?</h2>
          <p className="text-on-surface-muted font-light mb-8">Fork the repo, read the docs, and open a PR — every improvement counts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <a 
              href="https://github.com/KOUSTAV2409/NexusUI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-accent text-void font-bold uppercase text-[10px] tracking-widest py-3 px-8 rounded-full hover:brightness-110 transition-all text-center shadow-[0_0_20px_-5px_rgba(255,126,95,0.4)]"
            >
              View on GitHub
            </a>
            <Link 
              href="/roadmap"
              className="text-white border border-ghost-border font-bold uppercase text-[10px] tracking-widest py-3 px-8 rounded-full hover:bg-surface-high transition-colors text-center"
            >
              Roadmap
            </Link>
            <Link href="/docs" className="text-white border border-ghost-border font-bold uppercase text-[10px] tracking-widest py-3 px-8 rounded-full hover:bg-surface-high transition-colors text-center">
              Docs
            </Link>
            <Link href="/pricing" className="text-white border border-ghost-border font-bold uppercase text-[10px] tracking-widest py-3 px-8 rounded-full hover:bg-surface-high transition-colors text-center">
              Pricing
            </Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
