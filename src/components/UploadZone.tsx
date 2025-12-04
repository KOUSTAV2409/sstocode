'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2 } from 'lucide-react';
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

      const encoded = btoa(encodeURIComponent(data.code));
      router.push(`/preview?code=${encoded}`);
    } catch (error) {
      console.error('Generation failed:', error);
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
          className={`border-2 border-dashed rounded-lg p-16 text-center cursor-pointer transition-colors
            ${isDragActive 
              ? 'border-white bg-white/5' 
              : 'border-gray-700 hover:border-gray-500'
            }
          `}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">
            {isDragActive ? 'Drop here' : 'Drop screenshot or click to upload'}
          </p>
          <p className="text-sm text-gray-500">PNG, JPG, WEBP up to 10MB</p>
        </div>
      ) : (
        <div className="border border-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">screenshot.png</span>
            <button
              onClick={() => {
                setPreviewUrl(null);
                setUploadedFile(null);
              }}
              className="p-2 hover:bg-gray-800 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="relative aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden">
            <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
          </div>
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-white text-black py-3 rounded-md font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </span>
            ) : (
              'Generate Code'
            )}
          </button>
        </div>
      )}
    </div>
  );
}