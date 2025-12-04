'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AIProviderSelector() {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-sm text-white"
      >
        <Sparkles className="w-4 h-4" />
        <span>Gemini 2.5 Flash</span>
      </motion.div>
    </div>
  );
}
