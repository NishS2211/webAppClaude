import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { phases } from '../../../data/phases';
import './flow-shared.css';
import './MiniPhaseNode.css';

export interface PhaseStripNodeData extends Record<string, unknown> {
  isMobile?: boolean;
}

export type PhaseStripNodeType = Node<PhaseStripNodeData, 'phaseStrip'>;

/** The shared 5-phase workflow, rendered as one strip that every project below connects to. */
export function MiniPhaseNode({ data }: NodeProps<PhaseStripNodeType>) {
  return (
    <>
      <motion.div
        className="mpn-card"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {!data.isMobile && <div className="mpn-label">The shared workflow — every project below ran through this</div>}
        <div className="mpn-row">
          {phases.map((p) => (
            <div className={`mpn-chip ${p.colorClass}`} key={p.id}>
              <div className="mpn-num">{p.num}</div>
              {!data.isMobile && <div className="mpn-tag">{p.tag}</div>}
            </div>
          ))}
        </div>
      </motion.div>
      <Handle type="source" position={Position.Bottom} className="flow-handle" />
    </>
  );
}
