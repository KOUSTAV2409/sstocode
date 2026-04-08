'use client';

import { Upload, Sparkles, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Drop your UI screenshot or design mockup. PNG, JPG, or WebP up to 10MB.',
  },
  {
    icon: Sparkles,
    title: 'Generate',
    description: 'AI analyzes your design and generates clean React + Tailwind code in seconds.',
  },
  {
    icon: Copy,
    title: 'Edit & Copy',
    description: 'Preview live, tweak the code, and copy it to your project.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-3 tracking-tight">
          How it works
        </h2>
        <p className="text-obsidian-on/50 text-center mb-14 max-w-xl mx-auto">
          Three steps from design to production-ready code.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px', amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-obsidian-gold/40 to-transparent" />
              )}
              <div className="bg-obsidian-surface-low border border-obsidian-outline/30 rounded-sm p-6 h-full">
                <div className="w-12 h-12 rounded-sm bg-obsidian-surface-highest flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-obsidian-gold" />
                </div>
                <h3 className="font-headline font-semibold text-obsidian-on mb-2">{step.title}</h3>
                <p className="text-sm text-obsidian-on/55 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
