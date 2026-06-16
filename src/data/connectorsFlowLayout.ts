import { Position, type XYPosition } from '@xyflow/react';
import type { FlowEdge } from '../components/molecules/flow/AnimatedFlowEdge';
import { connectors } from './connectors';

export const CLAUDE_HUB_ID = 'claude-hub';

/** Hex values matching the `--cc` custom property for each connector's colorClass. */
const CONNECTOR_EDGE_COLORS: Record<string, string> = {
  figma: '#F24E1E',
  postman: '#FF6C37',
  jira: '#0052CC',
  drive: '#1FA463',
  gmail: '#EA4335',
  calendar: '#4285F4',
  code: '#6366f1',
};

const HUB_SIZE = 140;
const MOBILE_HUB_SIZE = 110;
const CARD_W = 188;
const CARD_H = 62;
const MOBILE_CARD_W = 168;
const MOBILE_CARD_H = 62;

const DESKTOP_RADIUS = 270;
const DESKTOP_CENTER: XYPosition = { x: 400, y: 380 };

export const connectorsFlowDesktopSize = { width: DESKTOP_CENTER.x * 2, height: DESKTOP_CENTER.y * 2 };

export function getDesktopConnectorPositions(): Record<string, XYPosition> {
  const positions: Record<string, XYPosition> = {
    [CLAUDE_HUB_ID]: { x: DESKTOP_CENTER.x - HUB_SIZE / 2, y: DESKTOP_CENTER.y - HUB_SIZE / 2 },
  };
  connectors.forEach((c, i) => {
    const angle = (i / connectors.length) * Math.PI * 2 - Math.PI / 2;
    positions[c.id] = {
      x: DESKTOP_CENTER.x + DESKTOP_RADIUS * Math.cos(angle) - CARD_W / 2,
      y: DESKTOP_CENTER.y + DESKTOP_RADIUS * Math.sin(angle) - CARD_H / 2,
    };
  });
  return positions;
}

/** The side of each connector card that faces the hub, for the AnimatedFlowEdge to radiate from. */
export function getDesktopHandlePositions(): Record<string, Position> {
  const result: Record<string, Position> = {};
  connectors.forEach((c, i) => {
    const angle = (i / connectors.length) * Math.PI * 2 - Math.PI / 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    if (Math.abs(cos) > Math.abs(sin)) {
      result[c.id] = cos > 0 ? Position.Left : Position.Right;
    } else {
      result[c.id] = sin > 0 ? Position.Top : Position.Bottom;
    }
  });
  return result;
}

const MOBILE_GAP_X = 20;
const MOBILE_GAP_Y = 20;
const MOBILE_TOP_GAP = 48;

export const connectorsFlowMobileSize = {
  width: MOBILE_CARD_W * 2 + MOBILE_GAP_X,
  height: MOBILE_HUB_SIZE + MOBILE_TOP_GAP + Math.ceil(connectors.length / 2) * (MOBILE_CARD_H + MOBILE_GAP_Y) - MOBILE_GAP_Y,
};

export function getMobileConnectorPositions(): Record<string, XYPosition> {
  const totalWidth = MOBILE_CARD_W * 2 + MOBILE_GAP_X;
  const positions: Record<string, XYPosition> = {
    [CLAUDE_HUB_ID]: { x: totalWidth / 2 - MOBILE_HUB_SIZE / 2, y: 0 },
  };
  connectors.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    positions[c.id] = {
      x: col * (MOBILE_CARD_W + MOBILE_GAP_X),
      y: MOBILE_HUB_SIZE + MOBILE_TOP_GAP + row * (MOBILE_CARD_H + MOBILE_GAP_Y),
    };
  });
  return positions;
}

export const connectorsFlowEdges: FlowEdge[] = connectors.map((c, i) => ({
  id: `ce-${c.id}`,
  source: c.id,
  target: CLAUDE_HUB_ID,
  type: 'flow',
  data: { color: CONNECTOR_EDGE_COLORS[c.id] ?? 'var(--brand)', delay: i * 0.3, pathType: 'straight', bidirectional: true },
}));
