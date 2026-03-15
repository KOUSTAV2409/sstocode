// src/app/preview/page.tsx
import { Suspense } from 'react';
import PreviewContent from './PreviewContent';
import ErrorBoundary from '@/components/ErrorBoundary';

export const dynamic = 'force-dynamic';

export default function PreviewPage() {
  return (
    <ErrorBoundary>
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-zinc-600 border-t-white rounded-full animate-spin mx-auto" />
          <p className="text-zinc-400 font-medium">Loading your component...</p>
        </div>
      </div>
    }>
      <PreviewContent />
    </Suspense>
    </ErrorBoundary>
  );
}