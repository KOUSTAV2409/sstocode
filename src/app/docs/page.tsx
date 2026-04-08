import type { Metadata } from 'next';
import DocsPageContent from '@/components/marketing/DocsPageContent';

export const metadata: Metadata = {
  title: 'Documentation | sstocode',
  description: 'Protocol documentation — Getting started with sstocode.',
};

export default function DocsPage() {
  return <DocsPageContent />;
}
