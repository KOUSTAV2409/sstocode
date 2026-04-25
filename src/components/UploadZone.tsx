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
        sessionStorage.setItem(`NexusUI_${sid}`, JSON.stringify({ code: data.code, provider: data.provider }));
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
              className={`cursor-pointer rounded-xl border border-dashed transition-colors duration-200 p-8 sm:p-12 md:p-16 text-center
                ${isDragActive 
                  ? 'border-white bg-white/5' 
                  : 'border-white/20 hover:border-white/50 hover:bg-surface-lowest'
                }
              `}
            >
              <input {...getInputProps()} />
              
              <div className="flex justify-center mb-6">
                <Upload className="w-8 h-8 text-white/50" />
              </div>
              
              <p className="font-sans text-xl font-bold mb-3 text-white tracking-tight">
                {isDragActive ? 'Drop to initialize' : 'Drop screenshot or click to upload'}
              </p>
              <p className="text-sm text-on-surface-muted mb-8 font-light">PNG, JPG, WEBP • Max 10MB</p>
              
              <div className="flex gap-3 justify-center mb-8 flex-wrap">
                <span className="bg-surface border border-ghost-border text-on-surface-muted px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider">React</span>
                <span className="bg-surface border border-ghost-border text-on-surface-muted px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider">Tailwind</span>
                <span className="bg-surface border border-ghost-border text-on-surface-muted px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider">TypeScript</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleTrySample(); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-on-surface-muted hover:text-white bg-transparent hover:bg-white/5 rounded-md transition-colors border border-white/10 font-medium"
                >
                  <ImageIcon className="w-4 h-4" />
                  Try with sample design
                </button>
                {/* 
                <button
                  type="button"
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    const projectId = prompt("Enter Google Stitch Project ID:");
                    if (projectId) {
                      setIsLoading(true);
                      fetch('/api/stitch/import', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ projectId })
                      })
                      .then(res => res.json())
                      .then(data => {
                        if (data.error) throw new Error(data.error);
                        const sid = crypto.randomUUID();
                        sessionStorage.setItem(\`NexusUI_\${sid}\`, JSON.stringify({ code: data.code, provider: data.provider }));
                        router.push(\`/preview?sid=\${sid}\`);
                      })
                      .catch(err => setError(err.message))
                      .finally(() => setIsLoading(false));
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-blue-400 hover:text-blue-300 hover:bg-obsidian-surface rounded-sm transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Import from Google Stitch
                </button>
                */}
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Settings className="h-4 w-4 shrink-0 text-on-surface-muted" />
                <span className="shrink-0 text-sm text-on-surface-muted font-mono">AI Model:</span>
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
            className="rounded-xl border border-white/10 bg-void p-6 sm:p-10 shadow-2xl"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-4">
                <div
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-white font-mono tracking-tight uppercase text-sm">DESIGN_UPLOADED</p>
                  {imageInfo && (
                    <p className="text-xs text-on-surface-muted break-words font-sans mt-1">
                      {imageInfo.width}×{imageInfo.height}px • {imageInfo.size}
                    </p>
                  )}
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="self-end p-2.5 text-on-surface-muted transition-colors hover:text-white hover:bg-surface-high rounded-full sm:self-auto border border-ghost-border bg-surface shadow-sm"
                aria-label="Remove and upload new"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
            
            {/* Compare view: original vs generated code */}
            {isCompareMode && generatedCode ? (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <p className="text-xs font-bold font-mono text-on-surface-muted uppercase">Original design</p>
                  <div className="aspect-video bg-void rounded-2xl overflow-hidden border border-ghost-border shadow-inner">
                    <img src={previewUrl} alt="Original" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold font-mono text-on-surface-muted uppercase">Generated code</p>
                  <div className="aspect-video bg-void rounded-2xl overflow-auto border border-ghost-border p-4 shadow-inner">
                    <pre className="text-xs text-on-surface font-mono whitespace-pre-wrap break-words">
                      {generatedCode.slice(0, 500)}{generatedCode.length > 500 ? '...' : ''}
                    </pre>
                    <p className="text-xs text-primary-accent mt-3 font-mono">View full preview in editor →</p>
                  </div>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-video bg-void rounded-2xl mb-8 overflow-hidden border border-ghost-border shadow-inner"
              >
                <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
              </motion.div>
            )}

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-wrap items-center gap-3">
                <Settings className="h-4 w-4 shrink-0 text-on-surface-muted" />
                <span className="shrink-0 text-sm text-on-surface-muted font-sans font-medium">AI Model:</span>
                <AIProviderSelector />
              </div>
              {generatedCode && (
                <button
                  type="button"
                  onClick={() => setIsCompareMode(!isCompareMode)}
                  className="text-left text-sm text-primary-accent transition-colors hover:text-white sm:text-right font-sans font-semibold tracking-wide"
                >
                  {isCompareMode ? 'Hide compare' : 'Compare original vs generated'}
                </button>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleGenerate(false)}
                disabled={isLoading}
                className="flex-1 bg-white text-void py-3 rounded-md font-bold tracking-wide font-sans transition-colors hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-void" />
                    Generating... {progress}%
                  </span>
                ) : (
                  'Generate Code'
                )}
              </button>
              {generatedCode && !isLoading && (
                <>
                  <button
                    onClick={() => handleGenerate(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/5 rounded-md font-bold font-sans tracking-wide transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Regen
                  </button>
                  <button
                    onClick={() => {
                      const sid = crypto.randomUUID();
                      sessionStorage.setItem(`NexusUI_${sid}`, JSON.stringify({ code: generatedCode, provider: usedProvider || 'Gemini' }));
                      router.push(`/preview?sid=${sid}`);
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-white/90 text-void rounded-md font-bold font-sans tracking-wide transition-colors"
                  >
                    View Editor
                  </button>
                </>
              )}
            </div>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6"
              >
                <div className="w-full bg-surface border border-ghost-border rounded-full h-2 overflow-hidden shadow-inner">
                  <motion.div
                    className="bg-primary-accent h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-xs text-on-surface-muted mt-3 text-center font-sans font-semibold tracking-wide uppercase">
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
