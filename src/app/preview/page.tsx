// src/app/preview/page.tsx → FINAL VERSION THAT DEPLOYS ON VERCEL
import { Suspense } from 'react';
import PreviewContent from './PreviewContent';

export const dynamic = 'force-dynamic';

export default function PreviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center">
        <div className="text-white text-3xl font-bold">Loading your component...</div>
      </div>
    }>
      <PreviewContent />
    </Suspense>
  );
}