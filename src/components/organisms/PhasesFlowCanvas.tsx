import { useMemo, useRef } from 'react';
import { ReactFlow, ReactFlowProvider, Background, BackgroundVariant } from '@xyflow/react';
import { PhaseFlowNode, type PhaseFlowNodeType } from '../molecules/flow/PhaseFlowNode';
import { AnimatedFlowEdge } from '../molecules/flow/AnimatedFlowEdge';
import { FitViewOnResize } from '../molecules/flow/FitViewOnResize';
import { phases } from '../../data/phases';
import { phasesFlowPositions, phasesFlowEdges, phasesFlowHeight } from '../../data/phasesFlowLayout';
import './PhasesFlowCanvas.css';

const nodeTypes = { phaseNode: PhaseFlowNode };
const edgeTypes = { flow: AnimatedFlowEdge };

interface PhasesFlowCanvasProps {
  onSelect: (id: string) => void;
}

export function PhasesFlowCanvas({ onSelect }: PhasesFlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const nodes = useMemo<PhaseFlowNodeType[]>(() => {
    const list: PhaseFlowNodeType[] = phases.map((phase) => ({
      id: phase.id,
      type: 'phaseNode',
      position: phasesFlowPositions[phase.id],
      data: { variant: 'phase', phase, onSelect },
      draggable: false,
    }));
    list.push({
      id: 'gate',
      type: 'phaseNode',
      position: phasesFlowPositions.gate,
      data: { variant: 'gate', onSelect },
      draggable: false,
    });
    list.push({
      id: 'production',
      type: 'phaseNode',
      position: phasesFlowPositions.production,
      data: { variant: 'production', onSelect },
      draggable: false,
    });
    return list;
  }, [onSelect]);

  return (
    <div className="phases-flow-canvas" style={{ height: phasesFlowHeight + 80 }} ref={containerRef}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={phasesFlowEdges}
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
