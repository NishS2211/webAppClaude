import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { LuChevronRight, LuShieldCheck, LuCheck, LuPencil, LuRotateCcw, LuRocket } from 'react-icons/lu';
import type { PhaseMeta } from '../../../types';
import './flow-shared.css';
import './PhaseFlowNode.css';

export interface PhaseFlowNodeData extends Record<string, unknown> {
  variant: 'phase' | 'gate' | 'production';
  phase?: PhaseMeta;
  onSelect?: (id: string) => void;
}

export type PhaseFlowNodeType = Node<PhaseFlowNodeData, 'phaseNode'>;

export function PhaseFlowNode({ data }: NodeProps<PhaseFlowNodeType>) {
  const { variant, phase, onSelect } = data;

  if (variant === 'gate') {
    return (
      <>
        <Handle type="target" position={Position.Top} className="flow-handle" />
        <motion.div
          className="pf-card pf-gate"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect?.('gate')}
        >
          <div className="pf-row">
            <div className="pf-icon pf-gate-icon"><LuShieldCheck size={18} /></div>
            <div className="pf-info">
              <div className="pf-name">Manual Validation Gate</div>
              <div className="pf-sub">Quality · Architecture · Performance · Standards</div>
            </div>
          </div>
          <div className="pf-decision-row">
            <span className="pf-dec pf-dec-y"><LuCheck size={12} /> Accept</span>
            <span className="pf-dec pf-dec-y"><LuPencil size={12} /> Modify</span>
            <span className="pf-dec pf-dec-n"><LuRotateCcw size={12} /> Reject</span>
          </div>
        </motion.div>
        <Handle type="source" position={Position.Bottom} className="flow-handle" />
      </>
    );
  }

  if (variant === 'production') {
    return (
      <>
        <Handle type="target" position={Position.Top} className="flow-handle" />
        <motion.div
          className="pf-card pf-production"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect?.('production')}
        >
          <div className="pf-icon pf-production-icon"><LuRocket size={18} /></div>
          <div className="pf-info">
            <div className="pf-name pf-production-name">Production-ready code</div>
            <div className="pf-sub">App Store · Play Store · Customer hands</div>
          </div>
        </motion.div>
      </>
    );
  }

  const p = phase!;
  return (
    <>
      <Handle type="target" position={Position.Top} className="flow-handle" />
      <motion.div
        className={`pf-card pf-phase ${p.colorClass}`}
        whileHover={{ scale: 1.02, x: 4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect?.(p.id)}
      >
        <div className="pf-row">
          <div className="pf-num">{p.num}</div>
          <div className="pf-info">
            <div className="pf-name">{p.name}</div>
            <div className="pf-sub">{p.sub}</div>
          </div>
          <div className="pf-arrow"><LuChevronRight size={14} /></div>
        </div>
        <div className="pf-tag-row"><span className="pf-tag">{p.tag}</span></div>
      </motion.div>
      <Handle type="source" position={Position.Bottom} className="flow-handle" />
    </>
  );
}
