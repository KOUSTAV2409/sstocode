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
  { name: 'GitHub', href: 'https://github.com/KOUSTAV2409/NexusUI', external: true },
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
    `font-sans text-sm tracking-normal transition-colors duration-200 whitespace-nowrap ${
      active
        ? 'text-primary-accent font-semibold'
        : 'text-on-surface-muted hover:text-white rounded-full px-2 py-1 -mx-2 hover:bg-white/5'
    }`;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-xl border-b border-ghost-border"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 h-20 flex items-center justify-between gap-2 sm:gap-3 min-w-0">
        <Link href="/" className="flex min-w-0 max-w-[min(100%,11rem)] items-center gap-2 sm:gap-3 group sm:max-w-none sm:shrink-0">
          <div className="w-8 h-8 shrink-0 rounded-full bg-primary-accent flex items-center justify-center text-white">
            <Logo size="sm" />
          </div>
          <span className="font-sans truncate text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
            SSTOCODE
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 shrink-0"
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-5 md:gap-8">
          <button
            type="button"
            className="lg:hidden shrink-0 rounded-full p-2 text-on-surface hover:bg-surface-high"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link
            href="/contributing"
            className="hidden sm:block text-[11px] uppercase tracking-widest font-semibold text-on-surface-muted hover:text-white transition-colors whitespace-nowrap"
          >
            Contribute
          </Link>
          <Link
            href="/#upload"
            className="metallic-luster whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
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
              className="fixed top-0 right-0 z-[70] h-full w-[min(100%,20rem)] bg-surface-low border-l border-ghost-border shadow-2xl lg:hidden flex flex-col"
              aria-label="Mobile"
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-ghost-border">
                <span className="font-sans text-sm font-bold text-white">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-full text-on-surface-muted hover:text-white hover:bg-surface-high transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-4 gap-2 overflow-y-auto">
                {navItems.map((item) => {
                  const active = !item.external && pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`px-4 py-3 rounded-2xl font-sans text-sm transition-colors ${
                        active
                          ? 'bg-surface-high text-primary-accent font-semibold'
                          : 'text-on-surface hover:bg-surface-high'
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

      <div className="h-px w-full absolute bottom-0 left-0 bg-ghost-border" />
    </motion.header>
  );
}
