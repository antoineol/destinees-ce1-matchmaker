import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'MatchMaker',
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
