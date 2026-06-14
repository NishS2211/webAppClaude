import type { ReactNode } from 'react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="sec-title">{children}</h2>;
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return <p className="sec-sub">{children}</p>;
}