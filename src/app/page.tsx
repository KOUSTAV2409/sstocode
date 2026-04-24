import type { Metadata } from 'next';
import HomeLanding from '@/components/marketing/HomeLanding';

export const metadata: Metadata = {
  title: 'NexusUI — From Screenshot to Production Code',
  description: 'Convert UI screenshots into production-ready React and Tailwind code using an agentic AI workflow.',
};

export default function Home() {
  return <HomeLanding />;
}
