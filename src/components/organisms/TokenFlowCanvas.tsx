import { useMemo, useRef } from 'react';
import { ReactFlow, ReactFlowProvider, Background, BackgroundVariant, Position } from '@xyflow/react';
import { TokenFlowNode, type TokenFlowNodeType } from '../molecules/flow/TokenFlowNode';
import { AnimatedFlowEdge } from '../molecules/flow/AnimatedFlowEdge';
import { FitViewOnResize } from '../molecules/flow/FitViewOnResize';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { tokenTechniques } from '../../data/tokenTechniques';
import {
  BASELINE_ID,
  RESULT_ID,
  tokenFlowEdges,
  tokenFlowDesktopSize,
  tokenFlowMobileSize,
  getDesktopTokenPositions,
  getMobileTokenPositions,
} from '../../data/tokenFlowLayout';
import './TokenFlowCanvas.css';

const nodeTypes = { tokenNode: TokenFlowNode };
const edgeTypes = { flow: AnimatedFlowEdge };

interface TokenFlowCanvasProps {
  onSelect: (id: string) => void;
}

export function TokenFlowCanvas({ onSelect }: TokenFlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');

  const nodes = useMemo<TokenFlowNodeType[]>(() => {
    const positions = isMobile ? getMobileTokenPositions() : getDesktopTokenPositions();
    const targetHandlePosition = isMobile ? Position.Top : Position.Left;
    const sourceHandlePosition = isMobile ? Position.Bottom : Position.Right;

    const baseline: TokenFlowNodeType = {
      id: BASELINE_ID,
      type: 'tokenNode',
      position: positions[BASELINE_ID],
      data: { variant: 'baseline', sourceHandlePosition },
      draggable: false,
    };
    const result: TokenFlowNodeType = {
      id: RESULT_ID,
      type: 'tokenNode',
      position: positions[RESULT_ID],
      data: { variant: 'result', targetHandlePosition },
      draggable: false,
    };
    const techniques: TokenFlowNodeType[] = tokenTechniques.map((technique, i) => ({
      id: technique.id,
      type: 'tokenNode',
      position: positions[technique.id],
      data: { variant: 'technique', technique, index: i, targetHandlePosition, sourceHandlePosition, onSelect },
      draggable: false,
    }));

    return [baseline, result, ...techniques];
  }, [isMobile, onSelect]);

  const size = isMobile ? tokenFlowMobileSize : tokenFlowDesktopSize;

  return (
    <div className="token-flow-canvas" style={{ height: size.height + 40, maxWidth: size.width + 40 }} ref={containerRef}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={tokenFlowEdges}
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
