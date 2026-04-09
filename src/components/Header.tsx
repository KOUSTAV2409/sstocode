'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const linkClass = (active: boolean) =>
    `font-headline text-sm tracking-tight transition-colors duration-200 whitespace-nowrap ${
      active
        ? 'text-obsidian-gold font-bold border-b-2 border-obsidian-gold pb-0.5'
        : 'text-obsidian-on/80 hover:text-obsidian-gold hover:bg-obsidian-surface/50 rounded px-1 -mx-1'
    }`;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-obsidian-bg border-b border-obsidian-surface-high/40"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 h-16 flex items-center justify-between gap-3 min-w-0">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 min-w-0">
          <div className="w-8 h-8 rounded-sm bg-obsidian-gold flex items-center justify-center text-obsidian-on-primary shrink-0">
            <Logo size="sm" />
          </div>
          <span className="font-headline text-lg sm:text-xl font-bold tracking-tighter text-obsidian-gold truncate">
            SSTOCODE
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 shrink-0"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const active = !item.external && pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={linkClass(active)}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
          <button
            type="button"
            className="lg:hidden p-2 rounded-sm text-obsidian-on hover:bg-obsidian-surface/80 -mr-1"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link
            href="/contributing"
            className="hidden sm:block text-[10px] uppercase tracking-widest font-bold text-obsidian-gold hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Contribute
          </Link>
          <Link
            href="/#upload"
            className="metallic-luster text-obsidian-on-primary px-3 py-2 sm:px-4 rounded-sm text-xs font-bold tracking-tight hover:opacity-90 active:scale-95 transition-transform whitespace-nowrap"
          >
            Upload
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="fixed top-0 right-0 z-[70] h-full w-[min(100%,20rem)] bg-obsidian-bg border-l border-obsidian-surface-high/40 shadow-xl lg:hidden flex flex-col"
              aria-label="Mobile"
            >
              <div className="flex items-center justify-between h-16 px-4 border-b border-obsidian-surface-high/40">
                <span className="font-headline text-sm font-bold text-obsidian-on">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-sm text-obsidian-on hover:bg-obsidian-surface/80"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-1 overflow-y-auto">
                {navItems.map((item) => {
                  const active = !item.external && pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`px-3 py-3 rounded-sm font-headline text-sm ${
                        active
                          ? 'bg-obsidian-surface text-obsidian-gold font-bold'
                          : 'text-obsidian-on/90 hover:bg-obsidian-surface/60'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <div className="nav-gradient-line h-px w-full absolute bottom-0 left-0" />
    </motion.header>
  );
}
