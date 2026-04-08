import type { Metadata } from 'next';
import RoadmapPageContent from '@/components/marketing/RoadmapPageContent';

export const metadata: Metadata = {
  title: 'Roadmap | sstocode',
  description: 'The Protocol roadmap.',
};

export default function RoadmapPage() {
  return <RoadmapPageContent />;
}
