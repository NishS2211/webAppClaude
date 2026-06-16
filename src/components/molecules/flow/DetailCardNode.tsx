import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import './flow-shared.css';
import './DetailCardNode.css';

export type DetailCardVariant = 'point' | 'rule' | 'step' | 'prompt' | 'outcome';

export interface DetailCardData extends Record<string, unknown> {
  variant: DetailCardVariant;
  colorClass?: string;
  icon?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  label?: string;
  num?: number;
  screen?: ReactNode;
  positive?: boolean;
  index?: number;
  targetHandlePosition?: Position;
  sourceHandlePosition?: Position;
}

export type DetailCardNodeType = Node<DetailCardData, 'detailCard'>;

const EASE = [0.16, 1, 0.3, 1] as const;

export function DetailCardNode({ data }: NodeProps<DetailCardNodeType>) {
  const {
    variant,
    colorClass,
    icon,
    title,
    text,
    label,
    num,
    screen,
    positive,
    index,
    targetHandlePosition,
    sourceHandlePosition,
  } = data;

  const motionProps = {
    initial: { opacity: 0, scale: 0.92 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay: 0.05 + (index ?? 0) * 0.06, ease: EASE },
  };

  const handles = (
    <>
      {targetHandlePosition && <Handle type="target" position={targetHandlePosition} className="flow-handle" />}
      {sourceHandlePosition && <Handle type="source" position={sourceHandlePosition} className="flow-handle" />}
    </>
  );

  if (variant === 'point') {
    return (
      <>
        {handles}
        <motion.div className={`flow-card dc-point ${colorClass ?? ''}`.trim()} {...motionProps}>
          <div className="dc-point-row">
            <div className="dc-point-icon">{icon}</div>
            <div className="flow-card-title">{title}</div>
          </div>
          <div className="flow-card-sub">{text}</div>
        </motion.div>
      </>
    );
  }

  if (variant === 'rule') {
    return (
      <>
        {handles}
        <motion.div className="dc-rule" {...motionProps}>
          {label && <div className="dc-rule-label">{label}</div>}
          <div className="dc-rule-text">{text}</div>
        </motion.div>
      </>
    );
  }

  if (variant === 'step') {
    return (
      <>
        {handles}
        <motion.div className="dc-step" {...motionProps}>
          <div className="dc-step-num">{num}</div>
          <div className="dc-step-title">{title}</div>
          <div className="dc-step-text">{text}</div>
          {screen && <div className="dc-step-screen">{screen}</div>}
        </motion.div>
      </>
    );
  }

  if (variant === 'prompt') {
    return (
      <>
        {handles}
        <motion.div className="dc-prompt" {...motionProps}>
          <div className="dc-prompt-tag">{label ?? 'Prompt'}</div>
          <div className="dc-prompt-text">{text}</div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      {handles}
      <motion.div className={`dc-outcome ${positive ? 'dc-outcome-y' : 'dc-outcome-n'}`} {...motionProps}>
        {icon}
        <span>{title}</span>
      </motion.div>
    </>
  );
}
