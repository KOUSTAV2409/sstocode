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
    <>
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 mx-auto z-40 w-[calc(100%-2rem)] max-w-6xl bg-void/70 backdrop-blur-2xl border border-ghost-border rounded-full diffuse-shadow"
    >
      <div className="px-4 h-16 flex items-center justify-between gap-2 sm:gap-3 min-w-0">
        <Link href="/" className="flex min-w-0 items-center gap-3 group shrink-0">
          <div className="w-8 h-8 shrink-0 rounded-full bg-primary-accent flex items-center justify-center text-white shadow-[0_0_15px_-3px_rgba(255,126,95,0.4)]">
            <Logo size="sm" />
          </div>
          <span className="font-sans hidden sm:block text-lg font-bold tracking-tight text-white">
            NexusUI
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0 bg-surface/30 p-1 rounded-full border border-ghost-border/50"
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
                className={`font-sans text-[11px] font-bold uppercase tracking-widest transition-all duration-200 px-4 py-2 rounded-full ${
                  active
                    ? 'bg-surface-high text-primary-accent'
                    : 'text-on-surface-muted hover:text-white hover:bg-surface-high'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <Link
            href="/#upload"
            className="whitespace-nowrap rounded-md px-5 py-2 text-[10px] font-bold uppercase tracking-widest bg-primary-accent text-void transition-colors hover:bg-white"
          >
            Upload
          </Link>

          <button
            type="button"
            className="lg:hidden shrink-0 rounded-full p-2 text-white bg-surface-highest hover:bg-surface-high border border-ghost-border transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.header>
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
              <div className="flex items-center justify-between h-20 px-6 border-b border-ghost-border relative z-10 bg-void">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-muted">Menu</span>
                <button
                  type="button"
                  className="p-2 rounded-none text-white hover:bg-surface-highest transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Minimal structural grid lines instead of abstract SVG slop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

              <div className="flex flex-col flex-1 p-6 gap-2 overflow-y-auto relative z-10 mt-4">
                {navItems.map((item, idx) => {
                  const active = !item.external && pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.05 + idx * 0.03 }}
                    >
                      <Link
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={`block px-4 py-3 font-sans text-xl font-bold tracking-tight transition-all border-b border-white/5 ${
                          active
                            ? 'text-primary-accent'
                            : 'text-on-surface-muted hover:text-white hover:pl-6'
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto p-6 relative z-10 border-t border-ghost-border bg-surface-low/80 backdrop-blur-md">
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-on-surface-muted text-center">
                  NexusUI · Designed for Builders
                </p>
              </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
