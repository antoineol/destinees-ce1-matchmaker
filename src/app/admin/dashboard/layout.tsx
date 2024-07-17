'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { logout, useIsAuthenticated } from '../utils/auth';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  // Watch authentication state, redirects if required
  const { replace } = useRouter();
  const isAuth = useIsAuthenticated();
  useEffect(() => {
    if (!isAuth) {
      replace('/admin/login');
    }
  }, [isAuth, replace]);

  // This app being embedded as an iframe, let's listen to the parent window's message event "reset" and trigger a logout.
  useEffect(() => {
    function handleReset(event: MessageEvent) {
      if (event.data.type === 'reset') {
        logout();
        // Then emit a message logout-done to the parent window
        window.parent.postMessage({ type: 'reset-done' }, '*');
      }
    }
    window.addEventListener('message', handleReset);
    return () => {
      window.removeEventListener('message', handleReset);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
    </>
  );
}
