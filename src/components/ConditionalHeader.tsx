'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  const hideHeader = pathname?.startsWith('/preview') || pathname === '/';

  if (hideHeader) {
    return null;
  }
  
  return <Header />;
}
