'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Auth', href: '/auth' },
  { name: 'Contributing', href: '/contributing' },
  { name: 'GitHub', href: 'https://github.com/KOUSTAV2409/sstocode', external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-obsidian-bg border-b border-obsidian-surface-high/40"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm bg-obsidian-gold flex items-center justify-center text-obsidian-on-primary">
            <Logo size="sm" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tighter text-obsidian-gold">
            SSTOCODE
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const active = !item.external && pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`font-headline text-sm tracking-tight transition-colors duration-200 ${
                  active
                    ? 'text-obsidian-gold font-bold border-b-2 border-obsidian-gold pb-0.5'
                    : 'text-obsidian-on/80 hover:text-obsidian-gold hover:bg-obsidian-surface/50 rounded px-1 -mx-1'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/contributing"
            className="hidden sm:block text-[10px] uppercase tracking-widest font-bold text-obsidian-gold hover:opacity-80 transition-opacity"
          >
            Contribute
          </Link>
          <Link
            href="/#upload"
            className="metallic-luster text-obsidian-on-primary px-4 py-2 rounded-sm text-xs font-bold tracking-tight hover:opacity-90 active:scale-95 transition-transform"
          >
            Upload
          </Link>
        </div>
      </div>
      <div className="nav-gradient-line h-px w-full absolute bottom-0 left-0" />
    </motion.header>
  );
}
