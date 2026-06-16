import { useMemo, useRef } from 'react';
import { ReactFlow, ReactFlowProvider, Background, BackgroundVariant } from '@xyflow/react';
import { ProjectFlowNode, type ProjectFlowNodeType } from '../molecules/flow/ProjectFlowNode';
import { MiniPhaseNode, type PhaseStripNodeType } from '../molecules/flow/MiniPhaseNode';
import { AnimatedFlowEdge } from '../molecules/flow/AnimatedFlowEdge';
import { FitViewOnResize } from '../molecules/flow/FitViewOnResize';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { projects } from '../../data/projects';
import {
  STRIP_ID,
  projectsFlowDesktopEdges,
  projectsFlowMobileEdges,
  projectsFlowDesktopSize,
  projectsFlowMobileSize,
  getDesktopProjectPositions,
  getMobileProjectPositions,
} from '../../data/projectsFlowLayout';
import './ProjectsFlowCanvas.css';

const nodeTypes = { projectNode: ProjectFlowNode, phaseStrip: MiniPhaseNode };
const edgeTypes = { flow: AnimatedFlowEdge };

type CanvasNode = ProjectFlowNodeType | PhaseStripNodeType;

interface ProjectsFlowCanvasProps {
  onSelect: (id: string) => void;
}

export function ProjectsFlowCanvas({ onSelect }: ProjectsFlowCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');

  const nodes = useMemo<CanvasNode[]>(() => {
    const positions = isMobile ? getMobileProjectPositions() : getDesktopProjectPositions();

    const strip: PhaseStripNodeType = {
      id: STRIP_ID,
      type: 'phaseStrip',
      position: positions[STRIP_ID],
      data: { isMobile },
      draggable: false,
    };
    const list: ProjectFlowNodeType[] = projects.map((project) => ({
      id: project.id,
      type: 'projectNode',
      position: positions[project.id],
      data: { project, onSelect },
      draggable: false,
    }));

    return [strip, ...list];
  }, [isMobile, onSelect]);

  const edges = isMobile ? projectsFlowMobileEdges : projectsFlowDesktopEdges;
  const size = isMobile ? projectsFlowMobileSize : projectsFlowDesktopSize;

  return (
    <div className="projects-flow-canvas" style={{ height: size.height + 40, maxWidth: size.width + 40 }} ref={containerRef}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
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
