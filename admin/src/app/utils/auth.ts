import { useEffect, useState } from 'react';
import { isBrowser } from './app-util-isbrowser';

const AUTH_KEY = 'destinees-admin-app-auth';

export const login = () => {
  if (!isBrowser) {
    console.warn('login on the server is no-op');
    return;
  }
  localStorage.setItem(AUTH_KEY, 'true');

  // Emit an event to notify other tabs/windows about the login
  const channel = new BroadcastChannel('auth_channel');
  channel.postMessage({ action: 'login' });
};

export const logout = () => {
  if (!isBrowser) {
    console.warn('logout on the server is no-op');
    return;
  }
  localStorage.removeItem(AUTH_KEY);

  // Emit an event to notify other tabs/windows about the logout
  const channel = new BroadcastChannel('auth_channel');
  channel.postMessage({ action: 'logout' });
};

export const isAuthenticated = (): boolean => {
  return !isBrowser ? false : localStorage.getItem(AUTH_KEY) === 'true';
};

export const useIsAuthenticated = () => {
  const [authState, setAuthState] = useState(isAuthenticated());

  useEffect(() => {
    // Create a BroadcastChannel to communicate between tabs/windows
    const channel = new BroadcastChannel('auth_channel');

    // Watch for messages from other tabs/windows
    const handleStorageChange = () => {
      setAuthState(isAuthenticated());
    };

    channel.addEventListener('message', handleStorageChange);

    return () => {
      channel.removeEventListener('message', handleStorageChange);
    };
  }, []);

  return authState;
};
