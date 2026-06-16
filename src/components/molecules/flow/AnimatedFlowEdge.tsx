import { BaseEdge, getSmoothStepPath, getStraightPath, type Edge, type EdgeProps } from '@xyflow/react';
import { motion } from 'framer-motion';

export type FlowEdgeData = {
  color?: string;
  delay?: number;
  pathType?: 'smoothstep' | 'straight';
  bidirectional?: boolean;
};

export type FlowEdge = Edge<FlowEdgeData>;

/** Edge with a static track plus a glowing particle that loops along the path. */
export function AnimatedFlowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps<FlowEdge>) {
  const [edgePath] = data?.pathType === 'straight'
    ? getStraightPath({ sourceX, sourceY, targetX, targetY })
    : getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        borderRadius: 12,
      });

  const color = data?.color ?? 'var(--brand)';
  const delay = data?.delay ?? 0;
  const bidirectional = data?.bidirectional ?? false;

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{ stroke: 'var(--surf4)', strokeWidth: 2 }} />
      <motion.circle
        r={5}
        fill={color}
        style={{
          offsetPath: `path('${edgePath}')`,
          filter: `drop-shadow(0 0 6px ${color})`,
        }}
        animate={{ offsetDistance: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay }}
      />
      {bidirectional && (
        <motion.circle
          r={4}
          fill={color}
          style={{
            offsetPath: `path('${edgePath}')`,
            filter: `drop-shadow(0 0 5px ${color})`,
            opacity: 0.7,
          }}
          animate={{ offsetDistance: ['100%', '0%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: delay + 1.2 }}
        />
      )}
    </>
  );
}