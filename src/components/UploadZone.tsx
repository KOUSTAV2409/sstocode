'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2, Image, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UploadZone() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1
  });

  const handleGenerate = async () => {
    if (!uploadedFile) return;
    
    setIsLoading(true);
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

      // Encode properly to match preview page decoding
      const encoded = btoa(encodeURIComponent(data.code));
      router.push(`/preview?code=${encoded}`);
    } catch (error) {
      console.error('Generation failed:', error);
      // Fallback to mock code if API fails
      const mockCode = `export default function Component() { return <div className="p-4">Hello World</div> }`;
      const encoded = btoa(encodeURIComponent(mockCode));
      router.push(`/preview?code=${encoded}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!previewUrl ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition-all duration-200
            ${isDragActive 
              ? 'border-slate-400 bg-slate-50' 
              : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50/50'
            }
          `}
        >
          <input {...getInputProps()} />
          
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
            <Upload className="w-8 h-8 text-slate-500" />
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {isDragActive ? 'Drop your design here' : 'Upload UI Screenshot'}
          </h3>
          
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Drag and drop your screenshot or click to browse. AI will convert it to React code.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              PNG, JPG, WEBP
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full" />
            <div>Up to 10MB</div>
          </div>
        </div>
      ) : (
        <div className="border border-slate-200 rounded-xl p-6 bg-white">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                <Image className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Design uploaded</p>
                <p className="text-sm text-slate-600">Ready to generate code</p>
              </div>
            </div>
            <button
              onClick={() => {
                setPreviewUrl(null);
                setUploadedFile(null);
              }}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative aspect-video bg-slate-50 rounded-lg mb-6 overflow-hidden border border-slate-200">
            <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating component...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate React Code
              </>
            )}
          </button>
          
          {isLoading && (
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600">
                AI is analyzing your design and creating React components...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}