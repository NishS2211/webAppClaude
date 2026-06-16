import { useMemo, useRef } from 'react';
import { ReactFlow, ReactFlowProvider, Background, BackgroundVariant, Position } from '@xyflow/react';
import { ConnectorFlowNode, type ConnectorFlowNodeType } from '../molecules/flow/ConnectorFlowNode';
import { ClaudeHubNode, type ClaudeHubNodeType } from '../molecules/flow/ClaudeHubNode';
import { AnimatedFlowEdge } from '../molecules/flow/AnimatedFlowEdge';
import { FitViewOnResize } from '../molecules/flow/FitViewOnResize';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { connectors } from '../../data/connectors';
import {
  CLAUDE_HUB_ID,
  connectorsFlowEdges,
  connectorsFlowDesktopSize,
  connectorsFlowMobileSize,
  getDesktopConnectorPositions,
  getDesktopHandlePositions,
  getMobileConnectorPositions,
} from '../../data/connectorsFlowLayout';
import './ConnectorsFlowCanvas.css';

const nodeTypes = { connectorNode: ConnectorFlowNode, claudeHub: ClaudeHubNode };
const edgeTypes = { flow: AnimatedFlowEdge };

type CanvasNode = ConnectorFlowNodeType | ClaudeHubNodeType;

interface ConnectorsFlowCanvasProps {
  onSelect: (id: string) => void;
}

export function ConnectorsFlowCanvas({ onSelect }: ConnectorsFlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');

  const nodes = useMemo<CanvasNode[]>(() => {
    if (isMobile) {
      const positions = getMobileConnectorPositions();
      const hub: ClaudeHubNodeType = {
        id: CLAUDE_HUB_ID,
        type: 'claudeHub',
        position: positions[CLAUDE_HUB_ID],
        data: { handlePosition: Position.Bottom },
        draggable: false,
      };
      const list: CanvasNode[] = connectors.map((connector) => ({
        id: connector.id,
        type: 'connectorNode',
        position: positions[connector.id],
        data: { connector, handlePosition: Position.Top, onSelect },
        draggable: false,
      }));
      return [hub, ...list];
    }

    const positions = getDesktopConnectorPositions();
    const handlePositions = getDesktopHandlePositions();
    const hub: ClaudeHubNodeType = {
      id: CLAUDE_HUB_ID,
      type: 'claudeHub',
      position: positions[CLAUDE_HUB_ID],
      data: { handlePosition: Position.Top },
      draggable: false,
    };
    const list: CanvasNode[] = connectors.map((connector) => ({
      id: connector.id,
      type: 'connectorNode',
      position: positions[connector.id],
      data: { connector, handlePosition: handlePositions[connector.id], onSelect },
      draggable: false,
    }));
    return [hub, ...list];
  }, [isMobile, onSelect]);

  const size = isMobile ? connectorsFlowMobileSize : connectorsFlowDesktopSize;

  return (
    <div className="connectors-flow-canvas" style={{ height: size.height + 40, maxWidth: size.width + 40 }} ref={containerRef}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={connectorsFlowEdges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          className="flow-canvas"
        >
          <Background variant={BackgroundVariant.Dots} gap={24} size={1} />
          <FitViewOnResize containerRef={containerRef} options={{ padding: 0.1 }} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
