import type { Metadata } from 'next';
import PricingPageContent from '@/components/marketing/PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing | NexusUI',
  description: 'NexusUI pricing and plans.',
};

export default function PricingPage() {
  return <PricingPageContent />;
}
