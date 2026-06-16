import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';

const bars = [
  { key: 'before', label: 'Before — vague prompts, multi-session', value: '100%', width: 100 },
  { key: 'after', label: 'After — disciplined prompts, single session', value: '~70%', width: 70 },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function AnimatedPercent({ value, visible, prefix = '' }: { value: number; visible: boolean; prefix?: string }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionValue.set(visible ? value : 0);
  }, [visible, value, motionValue]);

  useEffect(() => spring.on('change', (v) => setDisplay(Math.round(v))), [spring]);

  return <>{prefix}{display}%</>;
}

export function TokenHero() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2, true);

  return (
    <div className={`tok-hero reveal ${visible ? 'visible' : ''}`.trim()} ref={ref}>
      <div className="tok-hero-left">
        <div className="tok-hero-eyebrow">Realistic savings target</div>
        <div className="tok-hero-title">
          Save up to <span className="pct"><AnimatedPercent value={30} visible={visible} /></span><br />on your AI bills
        </div>
        <div className="tok-hero-sub">
          Without losing quality. Without changing the workflow. Just by being deliberate about how you spend tokens.
        </div>
        <div className="tok-hero-bars">
          {bars.map((bar, i) => (
            <div className="tok-bar-row" key={bar.key}>
              <div className="tok-bar-label">
                <span className="tok-bar-label-l">{bar.label}</span>
                <span className="tok-bar-label-r">{bar.value}</span>
              </div>
              <div className="tok-bar-track">
                <motion.div
                  className={`tok-bar-fill ${bar.key}`}
                  initial={{ width: 0 }}
                  animate={{ width: visible ? `${bar.width}%` : 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: EASE }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tok-hero-right">
        <div className="tok-circle">
          <motion.div
            className="tok-circle-inner"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="tok-circle-pct"><AnimatedPercent value={30} visible={visible} prefix="~" /></div>
            <div className="tok-circle-label">Money saved</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
