import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import type { Connector } from '../../../types';
import './flow-shared.css';
import './ConnectorFlowNode.css';

export interface ConnectorFlowNodeData extends Record<string, unknown> {
  connector: Connector;
  handlePosition?: Position;
  onSelect?: (id: string) => void;
}

export type ConnectorFlowNodeType = Node<ConnectorFlowNodeData, 'connectorNode'>;

export function ConnectorFlowNode({ data }: NodeProps<ConnectorFlowNodeType>) {
  const { connector, handlePosition, onSelect } = data;

  return (
    <>
      <Handle type="source" position={handlePosition ?? Position.Top} className="flow-handle" />
      <motion.div
        className={`cf-card ${connector.colorClass}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onSelect?.(connector.id)}
      >
        <div className="cf-logo" style={{ background: connector.logoBg }}>{connector.logo}</div>
        <div className="cf-info">
          <div className="cf-name">{connector.name}</div>
          <div className="cf-status">
            <span className="cf-status-dot" />
            {connector.status}
          </div>
        </div>
      </motion.div>
    </>
  );
}
