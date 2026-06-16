import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { motion } from 'framer-motion';
import {
  LuBot, LuShieldCheck, LuRocket,
  LuSearch, LuFileText, LuCode, LuFlaskConical, LuSettings2,
  LuCheck, LuPencil, LuRotateCcw, LuLoaderCircle,
  LuLayoutTemplate, LuGauge, LuRuler, LuCheckCheck, LuWorkflow, LuEye,
} from 'react-icons/lu';
import './flow-shared.css';
import './TrustFlowNode.css';

export interface TrustFlowNodeData extends Record<string, unknown> {
  variant: 'ai' | 'gate' | 'production';
  orientation: 'horizontal' | 'vertical';
}

export type TrustFlowNodeType = Node<TrustFlowNodeData, 'trustNode'>;

const skills = [
  { icon: <LuSearch size={12} />, text: 'Research codebase' },
  { icon: <LuFileText size={12} />, text: 'Write plans & docs' },
  { icon: <LuCode size={12} />, text: 'Generate code' },
  { icon: <LuFlaskConical size={12} />, text: 'Suggest test cases' },
  { icon: <LuSettings2 size={12} />, text: 'CI/CD configs' },
];

const limits = [
  { text: 'No final decisions' },
  { text: 'No team context' },
];

const reviewChecks = [
  { icon: <LuLayoutTemplate size={11} />, text: 'Architecture matches blueprint' },
  { icon: <LuCode size={11} />, text: 'No any/unknown — typed end-to-end' },
  { icon: <LuGauge size={11} />, text: 'No render loops or memory leaks' },
  { icon: <LuRuler size={11} />, text: 'Naming & folder placement clean' },
];

const shipsChecks = [
  { icon: <LuCheckCheck size={11} />, text: 'Fully typed, lint clean' },
  { icon: <LuWorkflow size={11} />, text: 'CI/CD automated' },
  { icon: <LuEye size={11} />, text: 'Reviewed twice (AI + human)' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

export function TrustFlowNode({ data }: NodeProps<TrustFlowNodeType>) {
  const { variant, orientation } = data;
  const targetPos = orientation === 'horizontal' ? Position.Left : Position.Top;
  const sourcePos = orientation === 'horizontal' ? Position.Right : Position.Bottom;

  if (variant === 'gate') {
    return (
      <>
        <Handle type="target" position={targetPos} className="flow-handle" />
        <motion.div
          className="tf-card tf-gate"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="tf-gate-top">
            <div className="tf-gate-icon"><LuShieldCheck size={26} /></div>
            <div>
              <div className="tf-gate-label">Human Gate</div>
              <div className="tf-gate-sub">Your team's domain knowledge</div>
            </div>
          </div>

          <div className="tf-gate-divider" />

          <div className="tf-gate-section-label">What gets checked</div>
          <div className="tf-review-list">
            {reviewChecks.map((c) => (
              <div className="tf-review-item" key={c.text}>
                <span className="tf-review-icon">{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>

          <div className="tf-gate-divider" />

          <div className="tf-gate-section-label">Three outcomes</div>
          <div className="tf-dec-row">
            <span className="tf-dec tf-dec-y"><LuCheck size={11} /> Accept</span>
            <span className="tf-dec tf-dec-y"><LuPencil size={11} /> Modify</span>
            <span className="tf-dec tf-dec-n"><LuRotateCcw size={11} /> Reject</span>
          </div>
          <div className="tf-reject-note">
            <LuLoaderCircle size={11} />
            Reject → AI re-scopes from scratch
          </div>
        </motion.div>
        <Handle type="source" position={sourcePos} className="flow-handle" />
      </>
    );
  }

  if (variant === 'production') {
    return (
      <>
        <Handle type="target" position={targetPos} className="flow-handle" />
        <motion.div
          className="tf-card tf-production"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="tf-production-top">
            <div className="tf-production-icon"><LuRocket size={20} /></div>
            <div>
              <div className="tf-production-title">Production</div>
              <div className="tf-production-sub">App Store · Play Store · customers</div>
            </div>
          </div>
          <div className="tf-ships-list">
            {shipsChecks.map((c) => (
              <div className="tf-ships-item" key={c.text}>
                <span className="tf-ships-dot">{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
          <div className="tf-production-stamp">Human approved</div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.div
        className="tf-card tf-ai"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="tf-ai-header">
          <div className="tf-ai-icon"><LuBot size={20} /></div>
          <div>
            <div className="tf-ai-label">AI Assistant</div>
            <div className="tf-ai-title">Claude</div>
          </div>
        </div>

        <div className="tf-ai-section-label">What it contributes</div>
        <motion.div className="tf-skills" variants={container} initial="hidden" animate="show">
          {skills.map((s) => (
            <motion.div className="tf-skill" variants={item} key={s.text}>
              <span className="tf-skill-dot" />
              {s.icon}
              {s.text}
            </motion.div>
          ))}
        </motion.div>

        <div className="tf-ai-divider" />
        <div className="tf-ai-section-label tf-ai-limit-label">What it cannot do</div>
        <div className="tf-limits">
          {limits.map((l) => (
            <div className="tf-limit" key={l.text}>
              <LuLoaderCircle size={11} className="tf-limit-icon" />
              {l.text}
            </div>
          ))}
        </div>
      </motion.div>
      <Handle type="source" position={sourcePos} className="flow-handle" />
    </>
  );
}
