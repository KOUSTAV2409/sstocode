import type { Metadata } from 'next';
import HomeLanding from '@/components/marketing/HomeLanding';

export const metadata: Metadata = {
  title: 'sstocode - AI-Powered Design to Code',
  description:
    'Transform UI designs into production-ready React components with AI. Upload screenshots, generate React + Tailwind, preview live.',
};

export default function Home() {
  return <HomeLanding />;
}
