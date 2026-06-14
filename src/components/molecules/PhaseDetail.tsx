import type { ReactNode } from 'react';

interface PhaseDetailProps {
  id: string;
  colorClass: string;
  isOpen: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

export function PhaseDetail({ id, colorClass, isOpen, fullWidth, children }: PhaseDetailProps) {
  return (
    <div className={`vf-detail ${isOpen ? 'open' : ''}`.trim()} id={`detail-${id}`}>
      <div
        className={`vf-detail-inner ${colorClass}`}
        style={fullWidth ? { gridTemplateColumns: '1fr' } : undefined}
      >
        {children}
      </div>
    </div>
  );
}