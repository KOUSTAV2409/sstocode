// src/app/preview/page.tsx
import { Suspense } from 'react';
import PreviewContent from './PreviewContent';

export const dynamic = 'force-dynamic';

export default function PreviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-600 font-medium">Loading your component...</p>
        </div>
      </div>
    }>
      <PreviewContent />
    </Suspense>
  );
}