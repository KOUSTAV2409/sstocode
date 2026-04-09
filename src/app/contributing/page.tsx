import Link from 'next/link';
import { ArrowLeft, Code, Users, Zap, Shield } from 'lucide-react';

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-obsidian-bg text-obsidian-on">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-28 pb-16">
        <div className="mb-10 flex flex-col gap-5">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm text-obsidian-on/50 transition-colors hover:text-obsidian-gold"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Back to Home
          </Link>
          <div className="w-fit bg-obsidian-surface-highest px-3 py-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-obsidian-tertiary">
              Open source
            </span>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-obsidian-on md:text-5xl">
            Contributing to <span className="text-obsidian-gold">sstocode</span>
          </h1>
          <p className="text-obsidian-on/55 text-lg">
            sstocode is an open source app: screenshots → React + Tailwind with Gemini, Monaco, and Sandpack. Help us improve
            prompts, UI, and docs.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-obsidian-on/60" aria-label="Site sections">
            <Link href="/" className="hover:text-obsidian-gold transition-colors">
              Home
            </Link>
            <Link href="/docs" className="hover:text-obsidian-gold transition-colors">
              Docs
            </Link>
            <Link href="/pricing" className="hover:text-obsidian-gold transition-colors">
              Pricing
            </Link>
            <Link href="/roadmap" className="hover:text-obsidian-gold transition-colors">
              Roadmap
            </Link>
            <Link href="/auth" className="hover:text-obsidian-gold transition-colors">
              Auth
            </Link>
            <a
              href="https://github.com/KOUSTAV2409/sstocode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-obsidian-gold transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>

        <section className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-6 text-obsidian-on">Quick start</h2>
          <div className="bg-obsidian-surface-low border border-obsidian-outline/25 rounded-sm p-6 obsidian-glass">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-obsidian-on">Prerequisites</h3>
                <p className="text-obsidian-on/55">Node.js 18+, Git, Gemini API key</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-obsidian-on">Setup</h3>
                <pre className="bg-obsidian-bg border border-obsidian-outline/20 p-4 rounded-sm text-sm overflow-x-auto text-obsidian-on/80">
{`git clone https://github.com/KOUSTAV2409/sstocode.git
cd sstocode
npm install
cp .env.local.example .env.local
# Add your GEMINI_API_KEY to .env.local
npm run dev`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-6 text-obsidian-on">Contribution areas</h2>
          <div className="grid gap-6">
            <div className="p-6 bg-obsidian-surface-low border border-emerald-500/20 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-emerald-400/90" />
                <h3 className="text-xl font-headline font-medium text-emerald-400/95">Beginner friendly</h3>
              </div>
              <ul className="space-y-2 text-obsidian-on/75">
                <li>• UI improvements and styling fixes</li>
                <li>• Documentation updates and tutorials</li>
                <li>• Bug fixes and error message improvements</li>
                <li>• Testing and quality assurance</li>
              </ul>
            </div>

            <div className="p-6 bg-obsidian-surface-low border border-obsidian-gold/25 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-obsidian-gold" />
                <h3 className="text-xl font-headline font-medium text-obsidian-gold">Intermediate</h3>
              </div>
              <ul className="space-y-2 text-obsidian-on/75">
                <li>• New feature implementation</li>
                <li>• AI provider integrations</li>
                <li>• Performance optimizations</li>
                <li>• API development and endpoints</li>
              </ul>
            </div>

            <div className="p-6 bg-obsidian-surface-low border border-rose-500/25 rounded-sm">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-rose-400/90" />
                <h3 className="text-xl font-headline font-medium text-rose-400/95">Advanced</h3>
              </div>
              <ul className="space-y-2 text-obsidian-on/75">
                <li>• Architecture improvements</li>
                <li>• Security enhancements</li>
                <li>• Infrastructure and CI/CD</li>
                <li>• Complex feature development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-headline text-2xl font-semibold mb-6 text-obsidian-on">Development guidelines</h2>
          <div className="space-y-6">
            <div className="bg-obsidian-surface-low border border-obsidian-outline/25 rounded-sm p-6">
              <h3 className="font-medium mb-3 text-obsidian-on">Code style</h3>
              <ul className="space-y-2 text-obsidian-on/55">
                <li>• Use TypeScript for all new code</li>
                <li>• Follow existing naming conventions</li>
                <li>• Use Tailwind CSS for styling</li>
                <li>• Keep components small and focused</li>
              </ul>
            </div>

            <div className="bg-obsidian-surface-low border border-obsidian-outline/25 rounded-sm p-6">
              <h3 className="font-medium mb-3 text-obsidian-on">Pull request process</h3>
              <ol className="space-y-2 text-obsidian-on/55 list-decimal list-inside">
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
          <h2 className="font-headline text-2xl font-semibold mb-6 flex items-center gap-2 text-obsidian-on">
            <Users className="w-6 h-6 text-obsidian-gold" />
            Community
          </h2>
          <div className="bg-obsidian-surface-low border border-obsidian-outline/25 rounded-sm p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-obsidian-on">Communication</h3>
                <ul className="space-y-1 text-obsidian-on/55">
                  <li>• GitHub Issues for bugs and features</li>
                  <li>• GitHub Discussions for questions</li>
                  <li>• Real-time chat (coming soon)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-obsidian-on">Need help?</h3>
                <p className="text-obsidian-on/55 mb-3">If you have any problems or questions:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:koustavganguly24@gmail.com" className="text-obsidian-gold hover:text-obsidian-bright transition-colors text-sm">
                    Email
                  </a>
                  <a href="https://iamk.xyz" target="_blank" rel="noopener noreferrer" className="text-obsidian-gold hover:text-obsidian-bright transition-colors text-sm">
                    Website
                  </a>
                  <a href="https://x.com/iamk_xyz" target="_blank" rel="noopener noreferrer" className="text-obsidian-gold hover:text-obsidian-bright transition-colors text-sm">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center p-8 md:p-10 obsidian-glass border border-obsidian-gold/15 rounded-sm">
          <h2 className="font-headline text-2xl font-semibold mb-4 text-obsidian-on">Ready to contribute?</h2>
          <p className="text-obsidian-on/55 mb-8">Fork the repo, read the docs, and open a PR — every improvement counts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
            <a 
              href="https://github.com/KOUSTAV2409/sstocode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="metallic-luster text-obsidian-on-primary font-bold uppercase text-[10px] tracking-[0.2em] py-3 px-8 hover:opacity-90 transition-opacity rounded-sm"
            >
              View on GitHub
            </a>
            <Link 
              href="/roadmap"
              className="text-obsidian-tertiary border border-obsidian-tertiary/25 font-bold uppercase text-[10px] tracking-[0.2em] py-3 px-8 hover:bg-obsidian-tertiary/10 transition-colors rounded-sm"
            >
              Roadmap
            </Link>
            <Link href="/docs" className="text-obsidian-tertiary border border-obsidian-tertiary/25 font-bold uppercase text-[10px] tracking-[0.2em] py-3 px-8 hover:bg-obsidian-tertiary/10 transition-colors rounded-sm">
              Docs
            </Link>
            <Link href="/pricing" className="text-obsidian-tertiary border border-obsidian-tertiary/25 font-bold uppercase text-[10px] tracking-[0.2em] py-3 px-8 hover:bg-obsidian-tertiary/10 transition-colors rounded-sm">
              Pricing
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
