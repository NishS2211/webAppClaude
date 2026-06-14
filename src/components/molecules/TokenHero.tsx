import { useReveal } from '../../hooks/useReveal';

const bars = [
  { key: 'before', label: 'Before — vague prompts, multi-session', value: '100%', width: 100 },
  { key: 'after', label: 'After — disciplined prompts, single session', value: '~80%', width: 80 },
];

export function TokenHero() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <div className={`tok-hero reveal ${visible ? 'visible' : ''}`.trim()} ref={ref}>
      <div className="tok-hero-left">
        <div className="tok-hero-eyebrow">Realistic savings target</div>
        <div className="tok-hero-title">Save up to <span className="pct">20%</span><br />on your AI bills</div>
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
                <div
                  className={`tok-bar-fill ${bar.key}`}
                  style={{ width: visible ? `${bar.width}%` : 0, transitionDelay: `${200 + i * 150}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tok-hero-right">
        <div className="tok-circle">
          <div className="tok-circle-inner">
            <div className="tok-circle-pct">~20%</div>
            <div className="tok-circle-label">Money saved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
