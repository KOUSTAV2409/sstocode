'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Sparkles } from 'lucide-react';

interface AIProvider {
  id: string;
  name: string;
}

interface AIProviderSelectorProps {
  selectedProvider: string | null;
  onProviderChange: (providerId: string | null) => void;
}

const providerIcons: Record<string, React.ReactNode> = {
  gemini: <Sparkles className="w-4 h-4" />,
  openai: <Zap className="w-4 h-4" />,
};

export default function AIProviderSelector({ selectedProvider, onProviderChange }: AIProviderSelectorProps) {
  const [availableProviders, setAvailableProviders] = useState<AIProvider[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch available providers from the API
    fetch('/api/providers')
      .then(res => res.json())
      .then(data => setAvailableProviders(data.providers || []))
      .catch(() => setAvailableProviders([]));
  }, []);

  const selectedProviderName = selectedProvider 
    ? availableProviders.find(p => p.id === selectedProvider)?.name || 'Auto'
    : 'Auto (Smart Fallback)';

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-sm text-white hover:bg-white/10 transition-colors"
      >
        {selectedProvider && providerIcons[selectedProvider]}
        <span>{selectedProviderName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 left-0 right-0 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50"
        >
          <div className="p-2">
            <button
              onClick={() => {
                onProviderChange(null);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                !selectedProvider ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4" />
              Auto (Smart Fallback)
            </button>
            
            {availableProviders.map((provider) => (
              <button
                key={provider.id}
                onClick={() => {
                  onProviderChange(provider.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  selectedProvider === provider.id ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {providerIcons[provider.id]}
                {provider.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
