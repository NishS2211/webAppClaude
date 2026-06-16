import { motion } from 'framer-motion';
import { LuArrowRight } from 'react-icons/lu';
import { tokenTechniques } from '../../data/tokenTechniques';
import './TokenLayout.css';

interface TokenLayoutProps {
  onSelect: (id: string) => void;
}

const cardAnim = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

function FlowConnector({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <div className="tl-connector">
      <div className="tl-conn-track">
        <motion.div
          className="tl-conn-particle"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          animate={{ left: ['-8px', 'calc(100% + 8px)'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay }}
        />
      </div>
      <div className="tl-conn-arrow" style={{ color }}>
        <LuArrowRight size={18} />
      </div>
    </div>
  );
}

export function TokenLayout({ onSelect }: TokenLayoutProps) {
  return (
    <div className="tl-layout">
      {/* Baseline stat */}
      <motion.div
        className="tl-stat tl-stat-baseline"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="tl-stat-pct tl-stat-pct-red">100%</div>
        <div className="tl-stat-label">Baseline cost</div>
        <div className="tl-stat-sub">Vague prompts,<br />multi-session</div>
      </motion.div>

      <FlowConnector color="var(--rose)" delay={0} />

      {/* Technique grid */}
      <motion.div
        className="tl-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
      >
        {tokenTechniques.map((t) => (
          <motion.button
            key={t.id}
            className={`tl-card ${t.colorClass}`}
            variants={cardAnim}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(t.id)}
          >
            <div className="tl-card-icon">{t.icon}</div>
            <div className="tl-card-body">
              <div className="tl-card-name">{t.name}</div>
              <div className="tl-card-saving">{t.saving}</div>
              {t.usedIn && t.usedIn.length > 0 && (
                <div className="tl-card-used">
                  {t.usedIn.map((p) => (
                    <span className="tl-card-used-icon" key={p.id} title={p.name}>{p.icon}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="tl-card-arrow">
              <LuArrowRight size={13} />
            </div>
          </motion.button>
        ))}
      </motion.div>

      <FlowConnector color="var(--green)" delay={0.5} />

      {/* Result stat */}
      <motion.div
        className="tl-stat tl-stat-result"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="tl-stat-pct tl-stat-pct-green">~30%</div>
        <div className="tl-stat-label">Saved</div>
        <div className="tl-stat-sub">Same output,<br />lower cost</div>
      </motion.div>
    </div>
  );
}
