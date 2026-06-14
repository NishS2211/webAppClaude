import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Fades/slides an element up into view the first time it enters the viewport. */
export function Reveal({ className = '', style, children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}