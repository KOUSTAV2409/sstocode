import type { Metadata } from 'next';
import SiteRevampNotice from '@/components/SiteRevampNotice';

export const metadata: Metadata = {
  title: 'sstocode — Coming soon',
  description: 'We are revamping our architecture. The full site will return soon.',
};

export default function Home() {
  return <SiteRevampNotice />;
}
