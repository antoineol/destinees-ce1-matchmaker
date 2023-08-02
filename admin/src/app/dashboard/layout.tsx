'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useIsAuthenticated } from '../utils/auth';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  // Watch authentication state, redirects if required
  const { replace } = useRouter();
  const isAuth = useIsAuthenticated();
  useEffect(() => {
    if (!isAuth) {
      replace('/login');
    }
  }, [isAuth, replace]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
