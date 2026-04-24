import type { Metadata } from 'next';
import DocsPageContent from '@/components/marketing/DocsPageContent';

export const metadata: Metadata = {
  title: 'Documentation | NexusUI',
  description: 'Protocol documentation — Getting started with NexusUI.',
};

export default function DocsPage() {
  return <DocsPageContent />;
}
