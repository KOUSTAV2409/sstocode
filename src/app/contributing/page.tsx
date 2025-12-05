import Link from 'next/link';
import { ArrowLeft, Code, Users, Zap, Shield } from 'lucide-react';

export default function ContributingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Contributing to sstocode</h1>
          <p className="text-zinc-400 text-lg">Help us build the future of AI-powered design to code</p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🚀 Quick Start</h2>
          <div className="bg-zinc-900/50 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Prerequisites</h3>
                <p className="text-zinc-400">Node.js 18+, Git, Gemini API key</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Setup</h3>
                <pre className="bg-black p-4 rounded text-sm overflow-x-auto">
{`git clone https://github.com/your-username/sstocode.git
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

        {/* Contribution Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">🎯 Contribution Areas</h2>
          <div className="grid gap-6">
            <div className="p-6 bg-green-900/20 border border-green-800/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-medium text-green-400">🟢 Beginner Friendly</h3>
              </div>
              <ul className="space-y-2 text-zinc-300">
                <li>• UI improvements and styling fixes</li>
                <li>• Documentation updates and tutorials</li>
                <li>• Bug fixes and error message improvements</li>
                <li>• Testing and quality assurance</li>
              </ul>
            </div>

            <div className="p-6 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-medium text-yellow-400">🟡 Intermediate</h3>
              </div>
              <ul className="space-y-2 text-zinc-300">
                <li>• New feature implementation</li>
                <li>• AI provider integrations</li>
                <li>• Performance optimizations</li>
                <li>• API development and endpoints</li>
              </ul>
            </div>

            <div className="p-6 bg-red-900/20 border border-red-800/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-medium text-red-400">🔴 Advanced</h3>
              </div>
              <ul className="space-y-2 text-zinc-300">
                <li>• Architecture improvements</li>
                <li>• Security enhancements</li>
                <li>• Infrastructure and CI/CD</li>
                <li>• Complex feature development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">📝 Development Guidelines</h2>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h3 className="font-medium mb-3">Code Style</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>• Use TypeScript for all new code</li>
                <li>• Follow existing naming conventions</li>
                <li>• Use Tailwind CSS for styling</li>
                <li>• Keep components small and focused</li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 rounded-lg p-6">
              <h3 className="font-medium mb-3">Pull Request Process</h3>
              <ol className="space-y-2 text-zinc-400 list-decimal list-inside">
                <li>Fork and create a feature branch</li>
                <li>Make your changes with tests</li>
                <li>Ensure all checks pass</li>
                <li>Submit PR with clear description</li>
                <li>Address review feedback</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Community
          </h2>
          <div className="bg-zinc-900/50 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Communication</h3>
                <ul className="space-y-1 text-zinc-400">
                  <li>• GitHub Issues for bugs and features</li>
                  <li>• GitHub Discussions for questions</li>
                  <li>• Real-time chat (coming soon)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-zinc-400 mb-3">If you have any problems or questions:</p>
                <div className="flex gap-4">
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
              </div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="text-center p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Contribute?</h2>
          <p className="text-zinc-400 mb-6">Check out our GitHub repository and start making a difference!</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/your-username/sstocode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              View on GitHub
            </a>
            <Link 
              href="/roadmap"
              className="px-6 py-3 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 transition-colors"
            >
              View Roadmap
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
