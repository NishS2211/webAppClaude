import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import { LuBox } from 'react-icons/lu';
import { Phase3Diagram } from '../Phase3Diagram';
import './flow-shared.css';
import './Phase3DiagramNode.css';

export interface Phase3DiagramNodeData extends Record<string, unknown> {
  targetHandlePosition?: Position;
  sourceHandlePosition?: Position;
}

export type Phase3DiagramNodeType = Node<Phase3DiagramNodeData, 'phase3Diagram'>;

export function Phase3DiagramNode({ data }: NodeProps<Phase3DiagramNodeType>) {
  const { targetHandlePosition, sourceHandlePosition } = data;

  return (
    <>
      {targetHandlePosition && <Handle type="target" position={targetHandlePosition} className="flow-handle" />}
      <motion.div
        className="p3d-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="p3d-title"><LuBox /> The inner cycle</div>
        <Phase3Diagram />
      </motion.div>
      {sourceHandlePosition && <Handle type="source" position={sourceHandlePosition} className="flow-handle" />}
    </>
  );
}
