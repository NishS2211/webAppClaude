import { motion } from 'framer-motion';
import {
  LuBot, LuShieldCheck, LuRocket,
  LuSearch, LuFileText, LuCode, LuFlaskConical, LuSettings2,
  LuCheck, LuPencil, LuRotateCcw, LuLoaderCircle,
  LuLayoutTemplate, LuGauge, LuRuler, LuCheckCheck, LuWorkflow, LuEye,
  LuArrowRight,
} from 'react-icons/lu';
import './TrustChainLayout.css';

const skillItems = [
  { icon: <LuSearch size={13} />, text: 'Research codebase' },
  { icon: <LuFileText size={13} />, text: 'Write plans & docs' },
  { icon: <LuCode size={13} />, text: 'Generate code' },
  { icon: <LuFlaskConical size={13} />, text: 'Suggest test cases' },
  { icon: <LuSettings2 size={13} />, text: 'CI/CD configs' },
];

const limitItems = [
  'Cannot make final decisions',
  'No context on team conventions',
];

const reviewItems = [
  { icon: <LuLayoutTemplate size={13} />, text: 'Architecture matches Phase 1 blueprint' },
  { icon: <LuCode size={13} />, text: 'No any/unknown — typed end-to-end' },
  { icon: <LuGauge size={13} />, text: 'No render loops or memory leaks' },
  { icon: <LuRuler size={13} />, text: 'Naming & folder placement clean' },
];

const shipItems = [
  { icon: <LuCheckCheck size={13} />, text: 'Fully typed, lint clean' },
  { icon: <LuWorkflow size={13} />, text: 'CI/CD automated' },
  { icon: <LuEye size={13} />, text: 'Reviewed twice (AI + human)' },
];

function Connector({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <div className="tc-connector">
      <div className="tc-connector-track">
        <motion.div
          className="tc-particle"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          animate={{ left: ['-8px', 'calc(100% + 8px)'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay }}
        />
      </div>
      <div className="tc-connector-arrow" style={{ color }}>
        <LuArrowRight size={16} />
      </div>
    </div>
  );
}

const cardAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export function TrustChainLayout() {
  return (
    <motion.div
      className="tc-layout"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18 } } }}
    >
      {/* ── AI Node ── */}
      <motion.div className="tc-card tc-ai" variants={cardAnim} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <div className="tc-card-header">
          <div className="tc-ai-icon"><LuBot size={22} /></div>
          <div>
            <div className="tc-label">AI Assistant</div>
            <div className="tc-title">Claude</div>
          </div>
        </div>

        <div className="tc-section-label tc-label-brand">What it contributes</div>
        <div className="tc-skill-list">
          {skillItems.map((s) => (
            <div className="tc-skill-item" key={s.text}>
              <span className="tc-skill-dot" />
              {s.icon}
              {s.text}
            </div>
          ))}
        </div>

        <div className="tc-divider" />

        <div className="tc-section-label tc-label-rose">What it cannot do</div>
        <div className="tc-limit-list">
          {limitItems.map((l) => (
            <div className="tc-limit-item" key={l}>
              <LuLoaderCircle size={12} />
              {l}
            </div>
          ))}
        </div>
      </motion.div>

      <Connector color="var(--brand)" delay={0} />

      {/* ── Gate Node ── */}
      <motion.div className="tc-card tc-gate" variants={cardAnim} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <div className="tc-card-header">
          <div className="tc-gate-icon"><LuShieldCheck size={24} /></div>
          <div>
            <div className="tc-label tc-label-light">The Gate</div>
            <div className="tc-title tc-title-light">Human Review</div>
            <div className="tc-gate-sub">Your team's domain knowledge</div>
          </div>
        </div>

        <div className="tc-section-label tc-label-brand-m">What gets checked</div>
        <div className="tc-review-list">
          {reviewItems.map((r) => (
            <div className="tc-review-item" key={r.text}>
              <span className="tc-review-icon">{r.icon}</span>
              {r.text}
            </div>
          ))}
        </div>

        <div className="tc-divider tc-divider-light" />

        <div className="tc-section-label tc-label-brand-m">Three outcomes</div>
        <div className="tc-outcomes-row">
          <span className="tc-outcome tc-outcome-y"><LuCheck size={12} /> Accept</span>
          <span className="tc-outcome tc-outcome-y"><LuPencil size={12} /> Modify</span>
          <span className="tc-outcome tc-outcome-n"><LuRotateCcw size={12} /> Reject</span>
        </div>
        <div className="tc-reject-note">
          <LuLoaderCircle size={11} />
          Reject → AI re-scopes and restarts
        </div>
      </motion.div>

      <Connector color="var(--green)" delay={0.4} />

      {/* ── Production Node ── */}
      <motion.div className="tc-card tc-production" variants={cardAnim} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <div className="tc-card-header">
          <div className="tc-prod-icon"><LuRocket size={22} /></div>
          <div>
            <div className="tc-label">End result</div>
            <div className="tc-title tc-title-green">Production</div>
            <div className="tc-prod-sub">App Store · Play Store · customers</div>
          </div>
        </div>

        <div className="tc-section-label tc-label-green">What ships</div>
        <div className="tc-ship-list">
          {shipItems.map((s) => (
            <div className="tc-ship-item" key={s.text}>
              <span className="tc-ship-icon">{s.icon}</span>
              {s.text}
            </div>
          ))}
        </div>

        <div className="tc-prod-stamp">✓ Human approved</div>
      </motion.div>
    </motion.div>
  );
}
