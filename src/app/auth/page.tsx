import type { Metadata } from 'next';
import AuthPageContent from '@/components/marketing/AuthPageContent';

export const metadata: Metadata = {
  title: 'Sign in | NexusUI',
  description: 'Preview of the NexusUI sign-in experience.',
};

export default function AuthPage() {
  return <AuthPageContent />;
}
