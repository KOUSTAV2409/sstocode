'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const STORAGE_KEY = 'sstocode_onboarding_seen';

export default function OnboardingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        const t = setTimeout(() => setIsOpen(true), 150);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage may throw in private mode – show modal anyway
      const t = setTimeout(() => setIsOpen(true), 150);
      return () => clearTimeout(t);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold text-white mb-2">Welcome to sstocode</h2>
            <p className="text-zinc-400 text-sm mb-4">
              Turn UI screenshots into React components with AI. Here&apos;s how:
            </p>

            <ol className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-medium">1</span>
                <span className="text-zinc-300"><strong className="text-white">Upload</strong> – Drop a screenshot or click to select</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-medium">2</span>
                <span className="text-zinc-300"><strong className="text-white">Generate</strong> – AI creates React + Tailwind code</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-xs font-medium">3</span>
                <span className="text-zinc-300"><strong className="text-white">Edit & Copy</strong> – Preview, tweak, and export</span>
              </li>
            </ol>

            <button
              onClick={handleClose}
              className="mt-6 w-full py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors"
            >
              Get started
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
