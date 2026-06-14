import { LuChevronRight } from 'react-icons/lu';
import type { PhaseMeta } from '../../types';

interface PhaseNodeProps {
  phase: PhaseMeta;
  isActive: boolean;
  onClick: () => void;
}

export function PhaseNode({ phase, isActive, onClick }: PhaseNodeProps) {
  return (
    <div className={`vf-node ${phase.colorClass} ${isActive ? 'active' : ''}`.trim()} onClick={onClick}>
      <div className="vf-num">{phase.num}</div>
      <div className="vf-info">
        <div className="vf-name">{phase.name}</div>
        <div className="vf-sub">{phase.sub}</div>
      </div>
      <div className="vf-arrow">
        <LuChevronRight size={14} />
      </div>
      <div className="vf-tag">{phase.tag}</div>
    </div>
  );
}