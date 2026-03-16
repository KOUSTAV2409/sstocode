'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: 'Roadmap', href: '/roadmap', external: false },
    { name: 'Contributing', href: '/contributing', external: false },
    { name: 'GitHub', href: 'https://github.com/KOUSTAV2409/sstocode', external: true },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              className="w-7 h-7 bg-white rounded-md flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-4 h-4 text-black" viewBox="0 0 76 65" fill="currentColor">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
            </motion.div>
            <span className="font-semibold text-white">sstocode</span>
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 rounded-full px-2 py-1 backdrop-blur-sm">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="relative block px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-full"
              >
              {hoveredItem === item.name && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-violet-500/20 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/#upload"
              className="text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-full transition-colors shadow-lg shadow-violet-500/20"
            >
              Try it now
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
