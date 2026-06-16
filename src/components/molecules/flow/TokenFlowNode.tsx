import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import type { TokenTechnique } from '../../../types';
import './flow-shared.css';
import './TokenFlowNode.css';

export interface TokenFlowNodeData extends Record<string, unknown> {
  variant: 'baseline' | 'technique' | 'result';
  technique?: TokenTechnique;
  index?: number;
  targetHandlePosition?: Position;
  sourceHandlePosition?: Position;
  onSelect?: (id: string) => void;
}

export type TokenFlowNodeType = Node<TokenFlowNodeData, 'tokenNode'>;

export function TokenFlowNode({ data }: NodeProps<TokenFlowNodeType>) {
  const { variant, technique, index, targetHandlePosition, sourceHandlePosition, onSelect } = data;

  if (variant === 'baseline') {
    return (
      <>
        <motion.div
          className="tf-card tf-baseline"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="tf-stat">100%</div>
          <div className="tf-stat-label">Baseline cost</div>
          <div className="tf-stat-sub">Vague prompts, multi-session</div>
        </motion.div>
        <Handle type="source" position={sourceHandlePosition ?? Position.Right} className="flow-handle" />
      </>
    );
  }

  if (variant === 'result') {
    return (
      <>
        <Handle type="target" position={targetHandlePosition ?? Position.Left} className="flow-handle" />
        <motion.div
          className="tf-card tf-result"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="tf-stat">~20%</div>
          <div className="tf-stat-label">Saved</div>
          <div className="tf-stat-sub">Same output, lower cost</div>
        </motion.div>
      </>
    );
  }

  const t = technique!;
  return (
    <>
      <Handle type="target" position={targetHandlePosition ?? Position.Left} className="flow-handle" />
      <motion.div
        className={`tf-card tf-technique ${t.colorClass}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 + (index ?? 0) * 0.07, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect?.(t.id)}
      >
        <div className="tf-icon">{t.icon}</div>
        <div className="tf-info">
          <div className="tf-name">{t.name}</div>
          <div className="tf-saving">{t.saving}</div>
          {t.usedIn && t.usedIn.length > 0 && (
            <div className="tf-used-in">
              {t.usedIn.map((p) => (
                <span className="tf-used-in-icon" key={p.id} title={`Used in ${p.name}`}>{p.icon}</span>
              ))}
            </div>
          )}
        </div>
        <div className="tf-arrow"><LuArrowRight size={13} /></div>
      </motion.div>
      <Handle type="source" position={sourceHandlePosition ?? Position.Right} className="flow-handle" />
    </>
  );
}
