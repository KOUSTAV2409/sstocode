'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, ImageIcon, Loader2, Sparkles } from 'lucide-react';
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
      toast.loading('Generating your React + Tailwind code...', { duration: 0 });

      try {
        const res = await fetch('/generate', { method: 'POST', body: formData });
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed');

        toast.dismiss();
        toast.success('Code generated!');

        // ULTRA-SAFE ENCODING — works with backticks, newlines, everything
        const encoded = btoa(encodeURIComponent(data.code));
        router.push(`/preview?code=${encoded}`);
      } catch (err: any) {
        toast.dismiss();
        toast.error(err.message || 'Failed');
        setIsLoading(false);
      }
    },
    [router]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif'] },
    maxFiles: 1,
  });

  return (
    <div className="space-y-8">
      <div
        {...getRootProps()}
        className={`relative border-4 border-dashed rounded-2xl p-16 text-center transition-all cursor-pointer
          ${isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-white/30 hover:border-white/50'}
          ${isLoading ? 'opacity-70 pointer-events-none' : ''}
        `}
      >
        <input {...getInputProps()} disabled={isLoading} />

        {isLoading ? (
          <Loader2 className="w-16 h-16 animate-spin mx-auto text-purple-400" />
        ) : (
          <Upload className="w-16 h-16 mx-auto text-gray-400" />
        )}

        <p className="text-2xl font-semibold text-white mt-6">
          {isDragActive ? 'Drop it here' : 'Drag & drop a UI screenshot'}
        </p>
        <p className="text-gray-400 mt-2">or click to browse</p>

        {isLoading && (
          <div className="flex items-center justify-center gap-3 mt-6 text-purple-400">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg">Gemini is crafting your code…</span>
          </div>
        )}
      </div>

      {previewUrl && !isLoading && (
        <div className="relative rounded-xl overflow-hidden border border-white/20">
          <ImageIcon className="absolute top-4 right-4 w-8 h-8 text-white/70 z-10" />
          <img src={previewUrl} alt="Preview" className="w-full rounded-xl" />
        </div>
      )}
    </div>
  );
}