'use client';

import { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2, CheckCircle, AlertCircle, Settings, RotateCcw, ImageIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AIProviderSelector from './AIProviderSelector';

interface ImageInfo {
  width: number;
  height: number;
  size: string;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getImageDimensions(file: File): Promise<ImageInfo> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        size: formatFileSize(file.size),
      });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ width: 0, height: 0, size: formatFileSize(file.size) });
    };
    img.src = url;
  });
}

function getFriendlyErrorMessage(error: string): string {
  if (error.includes('API key') || error.includes('GEMINI')) {
    return 'API key not configured. Add GEMINI_API_KEY to your environment.';
  }
  if (error.toLowerCase().includes('quota') || error.toLowerCase().includes('rate')) {
    return 'API rate limit reached. Please try again in a few minutes.';
  }
  if (error.toLowerCase().includes('network') || error.toLowerCase().includes('fetch')) {
    return 'Network error. Check your connection and try again.';
  }
  if (error.toLowerCase().includes('too short') || error.toLowerCase().includes('empty')) {
    return 'AI could not generate code from this image. Try a clearer screenshot.';
  }
  return error || 'Generation failed. Please try again.';
}

export default function UploadZone() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [usedProvider, setUsedProvider] = useState<string | null>(null);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const router = useRouter();
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: unknown[]) => {
    setError(null);
    
    if (rejectedFiles.length > 0) {
      const first = rejectedFiles[0] as { errors?: { code?: string }[] } | undefined;
      const firstError = first?.errors?.[0]?.code;
      if (firstError === 'file-too-large') {
        setError('Image too large. Maximum size is 10MB.');
      } else if (firstError === 'file-invalid-type') {
        setError('Invalid file type. Please use PNG, JPG, or WebP.');
      } else {
        setError('Please upload a valid image file (PNG, JPG, WEBP) under 10MB.');
      }
      return;
    }

    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setGeneratedCode(null);
      getImageDimensions(file).then(setImageInfo);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024 // 10MB
  });

  const handleGenerate = async (isRegenerate = false) => {
    if (!uploadedFile) return;
    
    setIsLoading(true);
    setProgress(0);
    setError(null);
    setUsedProvider(null);

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
          }
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      const formData = new FormData();
      formData.append('image', uploadedFile);

      const response = await fetch('/generate', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setProgress(100);
      setUsedProvider(data.provider);
      setGeneratedCode(data.code);
      
      const sid = crypto.randomUUID();
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(`sstocode_${sid}`, JSON.stringify({ code: data.code, provider: data.provider }));
      }
      
      if (!isRegenerate) {
        setTimeout(() => {
          router.push(`/preview?sid=${sid}`);
        }, 500);
      }
    } catch (err) {
      setError(getFriendlyErrorMessage(err instanceof Error ? err.message : 'Generation failed'));
      setProgress(0);
    } finally {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      setIsLoading(false);
    }
  };

  const handleTrySample = async () => {
    try {
      const res = await fetch('/api/sample-image');
      if (!res.ok) throw new Error('Failed to fetch');
      const blob = await res.blob();
      const file = new File([blob], 'sample-design.png', { type: 'image/png' });
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(blob));
      setGeneratedCode(null);
      setImageInfo({ width: 400, height: 300, size: formatFileSize(blob.size) });
    } catch {
      setError('Could not load sample. Please upload your own image.');
    }
  };

  const handleReset = () => {
    setPreviewUrl(null);
    setUploadedFile(null);
    setImageInfo(null);
    setError(null);
    setProgress(0);
    setUsedProvider(null);
    setIsCompareMode(false);
    setGeneratedCode(null);
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
                  ? 'border-violet-500 bg-violet-500/5 scale-[1.02]' 
                  : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50'
                }
              `}
            >
              <input {...getInputProps()} />
              
              <motion.div
                animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
              </motion.div>
              
              <motion.p 
                className="text-lg font-medium mb-2 text-white"
                animate={isDragActive ? { scale: 1.05 } : { scale: 1 }}
              >
                {isDragActive ? 'Drop here' : 'Drop screenshot or click to upload'}
              </motion.p>
              <p className="text-sm text-zinc-500 mb-4">PNG, JPG, WEBP up to 10MB</p>
              
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleTrySample(); }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 rounded-lg transition-colors mb-4"
              >
                <ImageIcon className="w-4 h-4" />
                Try with sample design
              </button>
              
              <div className="flex items-center justify-center gap-2">
                <Settings className="w-4 h-4 text-zinc-400" />
                <span className="text-sm text-zinc-400">AI Model:</span>
                <AIProviderSelector />
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
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
            className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30 backdrop-blur-sm"
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
                  <p className="font-medium text-white">Design uploaded successfully</p>
                  {imageInfo && (
                    <p className="text-sm text-zinc-400">
                      {imageInfo.width}×{imageInfo.height} · {imageInfo.size}
                    </p>
                  )}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleReset}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                aria-label="Remove and upload new"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
            
            {/* Compare view: original vs generated code */}
            {isCompareMode && generatedCode ? (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-zinc-400">Original design</p>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
                    <img src={previewUrl} alt="Original" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-zinc-400">Generated code</p>
                  <div className="aspect-video bg-zinc-900 rounded-lg overflow-auto border border-zinc-800 p-3">
                    <pre className="text-xs text-zinc-300 font-mono whitespace-pre-wrap break-words">
                      {generatedCode.slice(0, 500)}{generatedCode.length > 500 ? '...' : ''}
                    </pre>
                    <p className="text-xs text-violet-400 mt-2">View full preview in editor →</p>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-video bg-zinc-900 rounded-lg mb-6 overflow-hidden border border-zinc-800"
              >
                <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
              </motion.div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-zinc-400" />
                <span className="text-sm text-zinc-400">AI Model:</span>
                <AIProviderSelector />
              </div>
              {generatedCode && (
                <button
                  type="button"
                  onClick={() => setIsCompareMode(!isCompareMode)}
                  className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {isCompareMode ? 'Hide compare' : 'Compare original vs generated'}
                </button>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleGenerate(false)}
                disabled={isLoading}
                className="flex-1 bg-violet-600 hover:bg-violet-500 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating... {progress}%
                  </span>
                ) : (
                  'Generate Code'
                )}
              </motion.button>
              {generatedCode && !isLoading && (
                <>
                  <motion.button
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleGenerate(true)}
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-white rounded-lg font-medium transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Regenerate
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => {
                      const sid = crypto.randomUUID();
                      sessionStorage.setItem(`sstocode_${sid}`, JSON.stringify({ code: generatedCode, provider: usedProvider || 'Gemini' }));
                      router.push(`/preview?sid=${sid}`);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors"
                  >
                    View in preview
                  </motion.button>
                </>
              )}
            </div>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4"
              >
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <motion.div
                    className="bg-violet-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-sm text-zinc-400 mt-2 text-center">
                  {usedProvider ? `Using ${usedProvider}...` : 'AI is analyzing your design...'}
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
