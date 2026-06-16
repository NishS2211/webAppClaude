import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { LuBrainCircuit } from 'react-icons/lu';
import './flow-shared.css';
import './ClaudeHubNode.css';

export interface ClaudeHubNodeData extends Record<string, unknown> {
  handlePosition?: Position;
}

export type ClaudeHubNodeType = Node<ClaudeHubNodeData, 'claudeHub'>;

export function ClaudeHubNode({ data }: NodeProps<ClaudeHubNodeType>) {
  return (
    <>
      <Handle type="target" position={data.handlePosition ?? Position.Top} className="flow-handle" />
      <motion.div
        className="ch-hub"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="ch-icon"><LuBrainCircuit size={28} /></div>
        <div className="ch-label">Claude</div>
        <div className="ch-sub">↔ two-way</div>
      </motion.div>
    </>
  );
}
