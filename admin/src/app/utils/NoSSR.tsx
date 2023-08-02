import dynamic from 'next/dynamic';
import type { FC, PropsWithChildren } from 'react';

export const NoSSR: FC<PropsWithChildren> = dynamic(
  () => Promise.resolve((props: PropsWithChildren) => <>{props.children}</>),
  { ssr: false },
) as any;
