'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg text-slate-900">DevForge</span>
        </Link>

        <nav className="flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
