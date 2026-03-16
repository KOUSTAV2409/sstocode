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
    <section className="py-16 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How it works</h2>
        <p className="text-zinc-400 text-center mb-12 max-w-xl mx-auto">
          Three simple steps from design to production-ready code.
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
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
              )}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
