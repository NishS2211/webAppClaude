import { useMemo, useRef } from 'react';
import { ReactFlow, ReactFlowProvider, Background, BackgroundVariant } from '@xyflow/react';
import { TrustFlowNode, type TrustFlowNodeType } from '../molecules/flow/TrustFlowNode';
import { AnimatedFlowEdge } from '../molecules/flow/AnimatedFlowEdge';
import { FitViewOnResize } from '../molecules/flow/FitViewOnResize';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import {
  trustFlowEdges,
  trustFlowDesktopSize,
  trustFlowMobileSize,
  getDesktopTrustPositions,
  getMobileTrustPositions,
} from '../../data/trustFlowLayout';
import './TrustFlowCanvas.css';

const nodeTypes = { trustNode: TrustFlowNode };
const edgeTypes = { flow: AnimatedFlowEdge };

const VARIANTS = ['ai', 'gate', 'production'] as const;

export function TrustFlowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');

  const nodes = useMemo<TrustFlowNodeType[]>(() => {
    const positions = isMobile ? getMobileTrustPositions() : getDesktopTrustPositions();
    const orientation = isMobile ? 'vertical' : 'horizontal';
    return VARIANTS.map((variant) => ({
      id: variant,
      type: 'trustNode',
      position: positions[variant],
      data: { variant, orientation },
      draggable: false,
    }));
  }, [isMobile]);

  const size = isMobile ? trustFlowMobileSize : trustFlowDesktopSize;

  return (
    <div className="trust-flow-canvas" style={{ height: size.height + 40, maxWidth: size.width + 40 }} ref={containerRef}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={trustFlowEdges}
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
