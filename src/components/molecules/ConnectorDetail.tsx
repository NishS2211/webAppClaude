import { useEffect, useRef } from 'react';
import type { Connector } from '../../types';

interface ConnectorDetailProps {
  connector: Connector;
  isOpen: boolean;
}

export function ConnectorDetail({ connector, isOpen }: ConnectorDetailProps) {
  const { colorClass, logoBg, logo, detail } = connector;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div className={`conn-detail ${isOpen ? 'open' : ''}`.trim()} ref={ref}>
      <div className={`conn-detail-inner ${colorClass}`}>
        <div className="cdi-header">
          <div className="cdi-logo-big" style={{ background: logoBg }}>{logo}</div>
          <div>
            <div className="cdi-title">{detail.title}</div>
            <div className="cdi-tagline">{detail.tagline}</div>
          </div>
        </div>

        <div className="cdi-steps">
          {detail.steps.map((step) => (
            <div className="cdi-step" key={step.num}>
              <div className="cdi-step-num">{step.num}</div>
              <div className="cdi-step-title">{step.title}</div>
              <div className="cdi-step-text">{step.text}</div>
              <div className="cdi-step-screen">{step.screen}</div>
            </div>
          ))}
        </div>

        <div className="cdi-examples-title">Real prompts you can use today</div>
        <div className="cdi-prompts">
          {detail.prompts.map((prompt, i) => (
            <div className="cdi-prompt" key={i}>
              <div className="cdi-prompt-tag">Prompt</div>
              <div className="cdi-prompt-text">{prompt.text}</div>
            </div>
          ))}
        </div>

        <div className="cdi-use" style={{ background: detail.useCase.bg, borderColor: detail.useCase.borderColor }}>
          <div className="cdi-use-icon">{detail.useCase.icon}</div>
          <div>
            <div className="cdi-use-title" style={{ color: detail.useCase.titleColor }}>{detail.useCase.title}</div>
            <div className="cdi-use-text">{detail.useCase.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
