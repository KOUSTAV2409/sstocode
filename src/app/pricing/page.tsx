import type { Metadata } from 'next';
import PricingPageContent from '@/components/marketing/PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing | sstocode',
  description: 'sstocode pricing and plans.',
};

export default function PricingPage() {
  return <PricingPageContent />;
}
