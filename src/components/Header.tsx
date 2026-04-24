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
            href="/contributing"
            className="hidden md:block text-[10px] uppercase tracking-widest font-bold text-on-surface-muted hover:text-white transition-colors whitespace-nowrap"
          >
            Contribute
          </Link>
          <Link
            href="/#upload"
            className="whitespace-nowrap rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest bg-primary-accent text-void transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_-5px_rgba(255,126,95,0.5)]"
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
              <div className="flex items-center justify-between h-20 px-6 border-b border-ghost-border relative z-10 bg-surface-low/80 backdrop-blur-md">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white">Navigation</span>
                <button
                  type="button"
                  className="p-2 rounded-full text-white bg-surface-highest hover:bg-surface-high border border-ghost-border transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tailark-inspired abstract illustration */}
              <div className="absolute top-20 right-0 w-full h-64 overflow-hidden pointer-events-none opacity-40 mix-blend-screen">
                <svg viewBox="0 0 400 400" className="w-full h-full text-primary-accent" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 0L0 400" stroke="url(#paint0_linear)" strokeWidth="80" opacity="0.3" />
                  <path d="M200 -100L-100 200" stroke="url(#paint1_linear)" strokeWidth="60" opacity="0.4" />
                  <circle cx="350" cy="50" r="150" fill="url(#paint2_radial)" opacity="0.5" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="400" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor" stopOpacity="0.8" />
                      <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="200" y1="-100" x2="-100" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="currentColor" stopOpacity="1" />
                      <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350 50) rotate(90) scale(150)">
                      <stop stopColor="currentColor" stopOpacity="0.5" />
                      <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col p-6 gap-3 overflow-y-auto relative z-10 mt-4">
                {navItems.map((item, idx) => {
                  const active = !item.external && pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, ease: 'easeOut' }}
                    >
                      <Link
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className={`block px-5 py-4 rounded-3xl font-sans text-sm font-bold uppercase tracking-widest transition-all ${
                          active
                            ? 'bg-primary-accent text-void shadow-[0_0_20px_-5px_rgba(255,126,95,0.3)]'
                            : 'text-on-surface-muted border border-ghost-border hover:bg-surface-high hover:text-white diffuse-shadow'
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
