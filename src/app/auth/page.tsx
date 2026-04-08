import type { Metadata } from 'next';
import AuthPageContent from '@/components/marketing/AuthPageContent';

export const metadata: Metadata = {
  title: 'Sign in | sstocode',
  description: 'Preview of the sstocode sign-in experience.',
};

export default function AuthPage() {
  return <AuthPageContent />;
}
