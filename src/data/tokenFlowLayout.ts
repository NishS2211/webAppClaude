import type { XYPosition } from '@xyflow/react';
import type { FlowEdge } from '../components/molecules/flow/AnimatedFlowEdge';
import { tokenTechniques } from './tokenTechniques';

export const BASELINE_ID = 'baseline';
export const RESULT_ID = 'result';

/** Hex values matching each technique's `--tc` custom property, for edge particles. */
const TECHNIQUE_EDGE_COLORS: Record<string, string> = {
  'tc-1': '#6366f1',
  'tc-2': '#06b6d4',
  'tc-3': '#10b981',
  'tc-4': '#f59e0b',
  'tc-5': '#8b5cf6',
};

function edgeColor(colorClass: string): string {
  return TECHNIQUE_EDGE_COLORS[colorClass] ?? '#6366f1';
}

// Desktop: baseline stat -> 2x3 grid of techniques -> result stat
const D_TECH_W = 260;
const D_TECH_H = 108;
const D_ROW_GAP = 24;
const D_COL_GAP = 32;
const D_STAT_W = 200;
const D_STAT_H = 190;
const D_GAP_X = 96;

const D_GRID_W = D_TECH_W * 2 + D_COL_GAP;
const D_GRID_H = D_TECH_H * 3 + D_ROW_GAP * 2;

export const tokenFlowDesktopSize = {
  width: D_STAT_W + D_GAP_X + D_GRID_W + D_GAP_X + D_STAT_W,
  height: D_GRID_H,
};

export function getDesktopTokenPositions(): Record<string, XYPosition> {
  const positions: Record<string, XYPosition> = {};
  const centerY = D_GRID_H / 2;

  positions[BASELINE_ID] = { x: 0, y: centerY - D_STAT_H / 2 };

  const gridX0 = D_STAT_W + D_GAP_X;
  const gridX1 = gridX0 + D_TECH_W + D_COL_GAP;

  tokenTechniques.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    positions[t.id] = {
      x: col === 0 ? gridX0 : gridX1,
      y: row * (D_TECH_H + D_ROW_GAP),
    };
  });

  positions[RESULT_ID] = { x: gridX1 + D_TECH_W + D_GAP_X, y: centerY - D_STAT_H / 2 };

  return positions;
}

// Mobile: vertical stack — baseline stat, 2-col grid of techniques, result stat
const M_TECH_W = 172;
const M_TECH_H = 90;
const M_COL_GAP = 16;
const M_ROW_GAP = 16;
const M_STAT_W = 300;
const M_STAT_H = 90;
const M_GAP_Y = 48;

const M_GRID_W = M_TECH_W * 2 + M_COL_GAP;
const M_GRID_H = M_TECH_H * 3 + M_ROW_GAP * 2;

export const tokenFlowMobileSize = {
  width: Math.max(M_STAT_W, M_GRID_W),
  height: M_STAT_H + M_GAP_Y + M_GRID_H + M_GAP_Y + M_STAT_H,
};

export function getMobileTokenPositions(): Record<string, XYPosition> {
  const positions: Record<string, XYPosition> = {};
  const centerX = tokenFlowMobileSize.width / 2;

  positions[BASELINE_ID] = { x: centerX - M_STAT_W / 2, y: 0 };

  const gridY = M_STAT_H + M_GAP_Y;
  const gridX0 = centerX - M_GRID_W / 2;
  const gridX1 = gridX0 + M_TECH_W + M_COL_GAP;

  tokenTechniques.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    positions[t.id] = {
      x: col === 0 ? gridX0 : gridX1,
      y: gridY + row * (M_TECH_H + M_ROW_GAP),
    };
  });

  positions[RESULT_ID] = { x: centerX - M_STAT_W / 2, y: gridY + M_GRID_H + M_GAP_Y };

  return positions;
}

export const tokenFlowEdges: FlowEdge[] = tokenTechniques.flatMap((t, i) => [
  {
    id: `tfe-in-${t.id}`,
    source: BASELINE_ID,
    target: t.id,
    type: 'flow',
    data: { color: edgeColor(t.colorClass), delay: i * 0.25 },
  },
  {
    id: `tfe-out-${t.id}`,
    source: t.id,
    target: RESULT_ID,
    type: 'flow',
    data: { color: edgeColor(t.colorClass), delay: i * 0.25 + 0.15 },
  },
]);
