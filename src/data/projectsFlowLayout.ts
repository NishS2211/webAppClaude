import type { XYPosition } from '@xyflow/react';
import type { FlowEdge } from '../components/molecules/flow/AnimatedFlowEdge';
import { projects } from './projects';

export const STRIP_ID = 'phase-strip';

/** Hex values matching each project's `--pc` custom property, for edge particles. */
const PROJECT_EDGE_COLORS: Record<string, string> = {
  fleet: '#0ea5e9',
  decor: '#f59e0b',
  epp: '#10b981',
  dash: '#02569B',
};

function edgeColor(id: string): string {
  return PROJECT_EDGE_COLORS[id] ?? '#6366f1';
}

// Desktop: phase strip on top, 4 projects in a row below, fanning out from the strip
const D_STRIP_W = 720;
const D_STRIP_H = 130;
const D_PROJECT_W = 220;
const D_PROJECT_H = 190;
const D_GAP_X = 24;
const D_GAP_Y = 90;

const D_ROW_W = D_PROJECT_W * projects.length + D_GAP_X * (projects.length - 1);

export const projectsFlowDesktopSize = {
  width: Math.max(D_STRIP_W, D_ROW_W),
  height: D_STRIP_H + D_GAP_Y + D_PROJECT_H,
};

export function getDesktopProjectPositions(): Record<string, XYPosition> {
  const positions: Record<string, XYPosition> = {};
  positions[STRIP_ID] = { x: (projectsFlowDesktopSize.width - D_STRIP_W) / 2, y: 0 };

  const rowStartX = (projectsFlowDesktopSize.width - D_ROW_W) / 2;
  projects.forEach((p, i) => {
    positions[p.id] = { x: rowStartX + i * (D_PROJECT_W + D_GAP_X), y: D_STRIP_H + D_GAP_Y };
  });

  return positions;
}

export const projectsFlowDesktopEdges: FlowEdge[] = projects.map((p, i) => ({
  id: `pje-${p.id}`,
  source: STRIP_ID,
  target: p.id,
  type: 'flow',
  data: { color: edgeColor(p.id), delay: i * 0.3 },
}));

// Mobile: phase strip icon row, projects stacked into a single chained pipeline
const M_STRIP_W = 280;
const M_STRIP_H = 86;
const M_PROJECT_H = 188;
const M_GAP_Y = 32;

export const projectsFlowMobileSize = {
  width: M_STRIP_W,
  height: M_STRIP_H + M_GAP_Y + projects.length * M_PROJECT_H + (projects.length - 1) * M_GAP_Y,
};

export function getMobileProjectPositions(): Record<string, XYPosition> {
  const positions: Record<string, XYPosition> = {};
  positions[STRIP_ID] = { x: 0, y: 0 };

  projects.forEach((p, i) => {
    positions[p.id] = { x: 0, y: M_STRIP_H + M_GAP_Y + i * (M_PROJECT_H + M_GAP_Y) };
  });

  return positions;
}

export const projectsFlowMobileEdges: FlowEdge[] = projects.map((p, i) => ({
  id: `pje-m-${p.id}`,
  source: i === 0 ? STRIP_ID : projects[i - 1].id,
  target: p.id,
  type: 'flow',
  data: { color: edgeColor(p.id), delay: i * 0.3 },
}));
