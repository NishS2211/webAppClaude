import type { ReactNode } from 'react';

interface GradTextProps {
  children: ReactNode;
}

/** Inline gradient-filled text, matching the `.grad` accent style used throughout the page. */
export function GradText({ children }: GradTextProps) {
  return <span className="grad">{children}</span>;
}