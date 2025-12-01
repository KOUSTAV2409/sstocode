'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader2, Image } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function UploadZone() {
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const router = useRouter();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setPreviewUrl(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('image', file);

      setIsLoading(true);
      toast.loading('Analyzing your design...', { duration: 0 });

      try {
        const res = await fetch('/generate', { method: 'POST', body: formData });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Generation failed');

        toast.dismiss();
        toast.success('Component generated successfully!');

        const encoded = btoa(encodeURIComponent(data.code));
        router.push(`/preview?code=${encoded}`);
      } catch (err: any) {
        toast.dismiss();
        toast.error(err.message || 'Generation failed. Please try again.');
        setIsLoading(false);
      }
    },
    [router]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1,
    disabled: isLoading,
  });

  return (
    <div className="w-full space-y-6">
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={`
          relative cursor-pointer transition-all duration-200
          ${isLoading ? 'pointer-events-none' : ''}
        `}
      >
        <input {...getInputProps()} />

        <div className={`
          relative overflow-hidden rounded-xl border-2 border-dashed p-12 text-center
          transition-all duration-200
          ${isDragActive
            ? 'border-slate-900 bg-slate-50'
            : 'border-slate-300 hover:border-slate-400 bg-white'
          }
          ${isLoading ? 'opacity-50' : ''}
        `}>
          <div className="space-y-4">
            {isLoading ? (
              <>
                <Loader2 className="w-10 h-10 text-slate-900 mx-auto animate-spin" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-slate-900">
                    Processing your design...
                  </p>
                  <p className="text-xs text-slate-600">
                    This usually takes a few seconds
                  </p>
                </div>
              </>
            ) : (
              <>
                <Upload className="w-10 h-10 text-slate-600 mx-auto" />
                <div className="space-y-1">
                  <p className="text-base font-medium text-slate-900">
                    {isDragActive ? 'Drop your screenshot' : 'Upload UI screenshot'}
                  </p>
                  <p className="text-sm text-slate-600">
                    PNG, JPG, JPEG, or WebP • Up to 10MB
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Preview */}
      {previewUrl && !isLoading && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image className="w-4 h-4 text-slate-600" />
            <p className="text-sm font-medium text-slate-700">Preview</p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
            <img
              src={previewUrl}
              alt="Uploaded design preview"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}