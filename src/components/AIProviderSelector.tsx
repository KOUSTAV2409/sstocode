'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AIProviderSelector() {
  const [label, setLabel] = useState<string>('AI model');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/providers')
      .then((r) => r.json())
      .then((data: { providers?: { name: string }[] }) => {
        if (cancelled || !data.providers?.length) return;
        setLabel(data.providers[0]?.name ?? 'AI model');
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-2 px-4 py-2 bg-obsidian-surface-highest border border-obsidian-outline/40 rounded-sm text-sm text-obsidian-on"
      >
        <Sparkles className="w-4 h-4 text-obsidian-gold shrink-0" />
        <span className="truncate max-w-[200px]" title={label}>
          {label}
        </span>
      </motion.div>
    </div>
  );
}
