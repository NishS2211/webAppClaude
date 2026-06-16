import type { XYPosition } from '@xyflow/react';
import type { FlowEdge } from '../components/molecules/flow/AnimatedFlowEdge';

const AI_SIZE = { width: 280, height: 330 };
const GATE_SIZE = { width: 310, height: 270 };
const PRODUCTION_SIZE = { width: 260, height: 170 };

const GAP_X = 130;
const GAP_Y = 70;

export function getDesktopTrustPositions(): Record<string, XYPosition> {
  const maxH = AI_SIZE.height;
  return {
    ai: { x: 0, y: 0 },
    gate: { x: AI_SIZE.width + GAP_X, y: (maxH - GATE_SIZE.height) / 2 },
    production: {
      x: AI_SIZE.width + GAP_X + GATE_SIZE.width + GAP_X,
      y: (maxH - PRODUCTION_SIZE.height) / 2,
    },
  };
}

export const trustFlowDesktopSize = {
  width: AI_SIZE.width + GAP_X + GATE_SIZE.width + GAP_X + PRODUCTION_SIZE.width,
  height: AI_SIZE.height,
};

export function getMobileTrustPositions(): Record<string, XYPosition> {
  const colWidth = Math.max(AI_SIZE.width, GATE_SIZE.width, PRODUCTION_SIZE.width);
  return {
    ai: { x: (colWidth - AI_SIZE.width) / 2, y: 0 },
    gate: { x: (colWidth - GATE_SIZE.width) / 2, y: AI_SIZE.height + GAP_Y },
    production: {
      x: (colWidth - PRODUCTION_SIZE.width) / 2,
      y: AI_SIZE.height + GAP_Y + GATE_SIZE.height + GAP_Y,
    },
  };
}

export const trustFlowMobileSize = {
  width: Math.max(AI_SIZE.width, GATE_SIZE.width, PRODUCTION_SIZE.width),
  height: AI_SIZE.height + GAP_Y + GATE_SIZE.height + GAP_Y + PRODUCTION_SIZE.height,
};

export const trustFlowEdges: FlowEdge[] = [
  { id: 'tf-ai-gate', source: 'ai', target: 'gate', type: 'flow', data: { color: 'var(--brand)' } },
  { id: 'tf-gate-production', source: 'gate', target: 'production', type: 'flow', data: { color: 'var(--green)', delay: 0.4 } },
];
