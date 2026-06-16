import type { ReactNode } from 'react';
import { LuArrowRight } from 'react-icons/lu';
import { phaseFlowDetails, phase3Extras, type PhaseFlowExtra } from '../../data/phaseFlowDetails';
import { Phase3Diagram } from './Phase3Diagram';
import './PhaseVisualFlow.css';

interface PhaseVisualFlowProps {
  phaseId: string;
}

export function PhaseVisualFlow({ phaseId }: PhaseVisualFlowProps) {
  if (phaseId === '3') {
    return (
      <div className="pvf">
        <div className="pvf-p3-diagram">
          <div className="pvf-p3-title">The inner cycle</div>
          <Phase3Diagram />
        </div>
        <div className="pvf-extras">
          {phase3Extras.map((extra, i) => (
            <ExtraBox key={i} extra={extra} />
          ))}
        </div>
      </div>
    );
  }

  const detail = phaseFlowDetails[phaseId];
  if (!detail) return null;

  return (
    <div className="pvf">
      <div className="pvf-steps">
        {detail.points.map((point, i) => (
          <>
            <div className="pvf-step" key={i}>
              <div className="pvf-step-badge">{String(i + 1).padStart(2, '0')}</div>
              <div className="pvf-step-icon">{point.icon}</div>
              <div className="pvf-step-title">{point.title}</div>
              <div className="pvf-step-text">{point.text}</div>
            </div>
            {i < detail.points.length - 1 && (
              <div className="pvf-arrow" key={`a-${i}`}>
                <LuArrowRight size={16} />
              </div>
            )}
          </>
        ))}
      </div>

      {detail.outcomes && (
        <div className="pvf-outcomes">
          <div className="pvf-outcomes-label">Three outcomes</div>
          <div className="pvf-outcomes-row">
            {detail.outcomes.map((o, i) => (
              <span key={i} className={`pvf-outcome ${o.positive ? 'pvf-outcome-yes' : 'pvf-outcome-no'}`}>
                {o.icon} {o.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {detail.extras && (
        <div className="pvf-extras">
          {detail.extras.map((extra, i) => (
            <ExtraBox key={i} extra={extra} />
          ))}
        </div>
      )}
    </div>
  );
}

function ExtraBox({ extra }: { extra: PhaseFlowExtra }): ReactNode {
  return (
    <div className={`pvf-extra pvf-extra-${extra.variant}`}>
      <div className="pvf-extra-label">{extra.label}</div>
      <div className="pvf-extra-text">{extra.text}</div>
    </div>
  );
}