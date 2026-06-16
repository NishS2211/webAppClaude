import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import type { ConnectorStep } from '../../types';
import './ConnectorStepsFlow.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ConnectorStepsFlow({ steps }: { steps: ConnectorStep[] }) {
  return (
    <motion.div className="csf-row" variants={container} initial="hidden" animate="show">
      {steps.map((step, i) => (
        <motion.div className="csf-step" variants={item} key={step.num}>
          {i > 0 && <div className="csf-arrow"><LuArrowRight size={16} /></div>}
          <div className="csf-card">
            <div className="csf-num">{step.num}</div>
            <div className="csf-title">{step.title}</div>
            <div className="csf-text">{step.text}</div>
            <div className="csf-screen">{step.screen}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
