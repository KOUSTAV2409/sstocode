// src/app/preview/page.tsx
import { Suspense } from 'react';
import PreviewContent from './PreviewContent';
import ErrorBoundary from '@/components/ErrorBoundary';

export const dynamic = 'force-dynamic';

export default function PreviewPage() {
  return (
    <ErrorBoundary>
    <Suspense fallback={
      <div className="min-h-screen bg-obsidian-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-obsidian-outline/50 border-t-obsidian-gold rounded-full animate-spin mx-auto" />
          <p className="text-obsidian-on/55 font-medium">Loading your component...</p>
        </div>
      </div>
    }>
      <PreviewContent />
    </Suspense>
    </ErrorBoundary>
  );
}