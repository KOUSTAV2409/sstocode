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
  if (
    error.includes('API key') ||
    error.includes('GEMINI') ||
    error.includes('OPENROUTER') ||
    error.includes('MISTRAL') ||
    error.includes('No AI provider configured')
  ) {
    return 'Add OPENROUTER_API_KEY, MISTRAL_API_KEY, and/or GEMINI_API_KEY to your environment (.env.local).';
  }
  if (
    error.includes('503') ||
    error.toLowerCase().includes('service unavailable') ||
    error.toLowerCase().includes('high demand') ||
    error.toLowerCase().includes('temporarily busy') ||
    error.toLowerCase().includes('try again in a minute')
  ) {
    return 'Google AI is temporarily busy (high demand). Wait a minute and click Generate again — we also try backup models automatically.';
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
    <div className="w-full max-w-full mx-auto">
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
              className={`cursor-pointer rounded-sm border-2 border-dashed border-obsidian-outline/40 bg-obsidian-surface-lowest p-6 text-center transition-all duration-300 sm:p-10 md:p-14
                ${isDragActive 
                  ? 'border-obsidian-gold bg-obsidian-gold/5 scale-[1.01]' 
                  : 'hover:border-obsidian-gold/50 hover:bg-obsidian-surface-low/80'
                }
              `}
            >
              <input {...getInputProps()} />
              
              <motion.div
                animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-obsidian-gold" />
              </motion.div>
              
              <motion.p 
                className="font-headline text-lg font-medium mb-2 text-obsidian-on"
                animate={isDragActive ? { scale: 1.05 } : { scale: 1 }}
              >
                {isDragActive ? 'Drop here' : 'Drop screenshot or click to upload'}
              </motion.p>
              <p className="text-sm text-obsidian-on/45 mb-4">PNG, JPG, WEBP up to 10MB</p>
              
              <div className="flex gap-2 justify-center mb-6 flex-wrap">
                <span className="bg-obsidian-surface-highest text-obsidian-on/60 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">React</span>
                <span className="bg-obsidian-surface-highest text-obsidian-on/60 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">Tailwind</span>
                <span className="bg-obsidian-surface-highest text-obsidian-on/60 px-3 py-1 text-[10px] uppercase tracking-widest font-bold">TypeScript</span>
              </div>

              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleTrySample(); }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-obsidian-tertiary hover:text-obsidian-gold hover:bg-obsidian-surface rounded-sm transition-colors mb-4"
              >
                <ImageIcon className="w-4 h-4" />
                Try with sample design
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Settings className="h-4 w-4 shrink-0 text-obsidian-on/50" />
                <span className="shrink-0 text-sm text-obsidian-on/50">AI Model:</span>
                <AIProviderSelector />
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-start gap-2 text-left text-sm text-red-400"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="min-w-0 break-words">{error}</span>
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
            className="obsidian-glass rounded-sm border border-obsidian-outline/30 bg-obsidian-surface-low p-4 sm:p-6"
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-10 h-10 bg-emerald-600/90 rounded-sm flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
                <div className="min-w-0">
                  <p className="font-medium text-obsidian-on">Design uploaded successfully</p>
                  {imageInfo && (
                    <p className="text-sm text-obsidian-on/50 break-words">
                      {imageInfo.width}×{imageInfo.height} · {imageInfo.size}
                    </p>
                  )}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleReset}
                className="self-end p-2 text-obsidian-on/70 transition-colors hover:bg-obsidian-surface rounded-sm sm:self-auto"
                aria-label="Remove and upload new"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
            
            {/* Compare view: original vs generated code */}
            {isCompareMode && generatedCode ? (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-obsidian-on/50">Original design</p>
                  <div className="aspect-video bg-obsidian-surface-lowest rounded-sm overflow-hidden border border-obsidian-outline/30">
                    <img src={previewUrl} alt="Original" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-obsidian-on/50">Generated code</p>
                  <div className="aspect-video bg-obsidian-surface-lowest rounded-sm overflow-auto border border-obsidian-outline/30 p-3">
                    <pre className="text-xs text-obsidian-on/80 font-mono whitespace-pre-wrap break-words">
                      {generatedCode.slice(0, 500)}{generatedCode.length > 500 ? '...' : ''}
                    </pre>
                    <p className="text-xs text-obsidian-tertiary mt-2">View full preview in editor →</p>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-video bg-obsidian-surface-lowest rounded-sm mb-6 overflow-hidden border border-obsidian-outline/30"
              >
                <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
              </motion.div>
            )}

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <Settings className="h-4 w-4 shrink-0 text-obsidian-on/50" />
                <span className="shrink-0 text-sm text-obsidian-on/50">AI Model:</span>
                <AIProviderSelector />
              </div>
              {generatedCode && (
                <button
                  type="button"
                  onClick={() => setIsCompareMode(!isCompareMode)}
                  className="text-left text-sm text-obsidian-tertiary transition-colors hover:text-obsidian-gold sm:text-right"
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
                className="flex-1 metallic-luster text-obsidian-on-primary py-3 rounded-sm font-bold tracking-tight transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="flex items-center justify-center gap-2 px-4 py-3 border border-obsidian-outline/50 text-obsidian-on/80 hover:border-obsidian-gold/50 hover:text-obsidian-on rounded-sm font-medium transition-colors"
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
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-obsidian-surface-high hover:bg-obsidian-surface text-obsidian-on rounded-sm font-medium transition-colors"
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
                <div className="w-full bg-obsidian-surface rounded-full h-2">
                  <motion.div
                    className="bg-obsidian-gold h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-sm text-obsidian-on/50 mt-2 text-center">
                  {usedProvider ? `Using ${usedProvider}...` : 'AI is analyzing your design...'}
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-start gap-2 text-left text-sm text-red-400"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="min-w-0 break-words">{error}</span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
