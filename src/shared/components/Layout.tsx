import type { PropsWithChildren } from 'react';
import './layout.scss';

export function Layout({ children }: PropsWithChildren) {
  return <div className="layout">{children}</div>;
}
