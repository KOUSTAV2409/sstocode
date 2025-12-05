'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Don't show header on preview page
  if (pathname?.startsWith('/preview')) {
    return null;
  }
  
  return <Header />;
}
