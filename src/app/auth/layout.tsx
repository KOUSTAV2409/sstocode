import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in | sstocode',
  description: 'Access the SSTOCODE interface — sign in or create an account.',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
