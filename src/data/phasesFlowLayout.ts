import type { XYPosition } from '@xyflow/react';
import type { FlowEdge } from '../components/molecules/flow/AnimatedFlowEdge';

/** Global-token colors keyed by node id, used for edge particles and modal accents. */
export const PHASE_FLOW_COLORS: Record<string, string> = {
  '1': 'var(--brand)',
  '2': 'var(--cyan)',
  '3': 'var(--green)',
  '4': 'var(--amber)',
  '5': 'var(--purple)',
  gate: 'var(--brand)',
  production: 'var(--green)',
};

const ORDER = ['1', '2', '3', '4', '5', 'gate', 'production'];

const NODE_HEIGHT: Record<string, number> = {
  '1': 100, '2': 100, '3': 100, '4': 100, '5': 100, gate: 168, production: 88,
};

const GAP = 110;

function buildPositions(): Record<string, XYPosition> {
  const positions: Record<string, XYPosition> = {};
  let y = 0;
  for (const id of ORDER) {
    positions[id] = { x: 0, y };
    y += NODE_HEIGHT[id] + GAP;
  }
  return positions;
}

export const phasesFlowPositions = buildPositions();

export const phasesFlowHeight = ORDER.reduce((sum, id) => sum + NODE_HEIGHT[id] + GAP, -GAP);

export const phasesFlowEdges: FlowEdge[] = ORDER.slice(0, -1).map((id, i) => {
  const target = ORDER[i + 1];
  return {
    id: `pe-${id}-${target}`,
    source: id,
    target,
    type: 'flow',
    data: { color: PHASE_FLOW_COLORS[target], delay: i * 0.4 },
  };
});
