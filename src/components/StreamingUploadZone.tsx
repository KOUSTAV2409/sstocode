'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, CheckCircle, AlertCircle, Settings, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AIProviderSelector from './AIProviderSelector';

export default function StreamingUploadZone() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [streamingCode, setStreamingCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    setError(null);
    
    if (rejectedFiles.length > 0) {
      setError('Please upload a valid image file (PNG, JPG, WEBP) under 10MB');
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024
  });

  const handleStreamingGenerate = async () => {
    if (!uploadedFile) return;
    
    setIsLoading(true);
    setStreamingCode('');
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', uploadedFile);

      const response = await fetch('/api/generate-stream', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to start generation');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response stream');

      let fullCode = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              
              if (data.chunk) {
                fullCode += data.chunk;
                setStreamingCode(fullCode);
              }
              
              if (data.done) {
                setTimeout(() => {
                  const encoded = btoa(encodeURIComponent(fullCode));
                  router.push(`/preview?code=${encoded}&streaming=true`);
                }, 1000);
                return;
              }
              
              if (data.error) {
                throw new Error(data.error);
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

    } catch (error) {
      console.error('Streaming generation failed:', error);
      setError(error instanceof Error ? error.message : 'Generation failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!previewUrl ? (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition-all duration-300
                ${isDragActive 
                  ? 'border-white bg-white/5 scale-[1.02]' 
                  : 'border-gray-700 hover:border-gray-500 hover:bg-white/[0.02]'
                }
              `}
            >
              <input {...getInputProps()} />
              
              <motion.div
                animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              </motion.div>
              
              <motion.p 
                className="text-lg font-medium mb-2"
                animate={isDragActive ? { scale: 1.05 } : { scale: 1 }}
              >
                {isDragActive ? 'Drop here' : 'Drop screenshot or click to upload'}
              </motion.p>
              <p className="text-sm text-gray-500 mb-6">PNG, JPG, WEBP up to 10MB</p>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-400">Streaming Generation Enabled</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-4">
                <Settings className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">AI Model:</span>
                <AIProviderSelector />
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="border border-gray-800 rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <p className="font-medium">Design uploaded successfully</p>
                  <p className="text-sm text-gray-400">Ready for streaming generation</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setPreviewUrl(null);
                  setUploadedFile(null);
                  setError(null);
                  setStreamingCode('');
                }}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden"
            >
              <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
            </motion.div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-400">Streaming Mode</span>
              </div>
              <AIProviderSelector />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleStreamingGenerate}
              disabled={isLoading}
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5 animate-pulse" />
                  Streaming Generation...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Generate with Streaming
                </span>
              )}
            </motion.button>

            {/* Streaming Code Preview */}
            {streamingCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-700"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-sm text-yellow-400">Live Generation</span>
                </div>
                <pre className="text-xs text-gray-300 overflow-auto max-h-32">
                  {streamingCode}
                </pre>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                {error}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
