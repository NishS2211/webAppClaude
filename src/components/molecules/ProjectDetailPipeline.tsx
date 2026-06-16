import { motion } from 'framer-motion';
import { LuTriangleAlert, LuWorkflow, LuTrendingUp, LuArrowRight } from 'react-icons/lu';
import type { ProjectDetail } from '../../types';
import './ProjectDetailPipeline.css';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ProjectDetailPipeline({ detail }: { detail: ProjectDetail }) {
  const headline = detail.metrics[0];

  return (
    <motion.div className="pdp-row" variants={container} initial="hidden" animate="show">
      <motion.div className="pdp-step" variants={item}>
        <div className="pdp-card pdp-challenge">
          <div className="pdp-card-title"><LuTriangleAlert size={14} /> The challenge</div>
          <div className="pdp-card-text">{detail.challenge}</div>
        </div>
      </motion.div>
      <motion.div className="pdp-step" variants={item}>
        <div className="pdp-arrow"><LuArrowRight size={16} /></div>
        <div className="pdp-card pdp-solution">
          <div className="pdp-card-title"><LuWorkflow size={14} /> Workflow applied</div>
          <div className="pdp-card-text">{detail.solution}</div>
        </div>
      </motion.div>
      <motion.div className="pdp-step" variants={item}>
        <div className="pdp-arrow"><LuArrowRight size={16} /></div>
        <div className="pdp-card pdp-outcome">
          <div className="pdp-card-title"><LuTrendingUp size={14} /> Outcome</div>
          <div className="pdp-outcome-val">{headline.value}</div>
          <div className="pdp-outcome-label">{headline.label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
