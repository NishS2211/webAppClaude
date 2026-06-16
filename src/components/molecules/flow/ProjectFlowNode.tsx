import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import type { Project } from '../../../types';
import './flow-shared.css';
import './ProjectFlowNode.css';

export interface ProjectFlowNodeData extends Record<string, unknown> {
  project: Project;
  onSelect?: (id: string) => void;
}

export type ProjectFlowNodeType = Node<ProjectFlowNodeData, 'projectNode'>;

const MAX_CHIPS = 3;

export function ProjectFlowNode({ data }: NodeProps<ProjectFlowNodeType>) {
  const { project, onSelect } = data;
  const shown = project.stack.slice(0, MAX_CHIPS);
  const extra = project.stack.length - shown.length;

  return (
    <>
      <Handle type="target" position={Position.Top} className="flow-handle" />
      <motion.div
        className={`pjf-card ${project.colorClass}`}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect?.(project.id)}
      >
        <div className="pjf-head">
          <div className="pjf-icon">{project.icon}</div>
          <div className="pjf-info">
            <div className="pjf-name">{project.name}</div>
            <div className="pjf-client">{project.client}</div>
          </div>
        </div>
        <div className="pjf-stack">
          {shown.map((s) => <span className="pjf-chip" key={s}>{s}</span>)}
          {extra > 0 && <span className="pjf-chip pjf-chip-more">+{extra}</span>}
        </div>
        <div className="pjf-tag">{project.bannerTag}</div>
      </motion.div>
      <Handle type="source" position={Position.Bottom} className="flow-handle" />
    </>
  );
}
