import type { ComponentType } from 'react';
import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { Reveal } from '../atoms/Reveal';
import { PhaseConnector } from '../atoms/PhaseConnector';
import { PhaseNode } from '../molecules/PhaseNode';
import { PhaseDetail } from '../molecules/PhaseDetail';
import { GateNode } from '../molecules/GateNode';
import { ProductionBanner } from '../molecules/ProductionBanner';
import { Phase1Detail, Phase2Detail, Phase3Detail, Phase4Detail, Phase5Detail } from '../molecules/PhaseDetails';
import { phases } from '../../data/phases';
import { useAccordion } from '../../hooks/useAccordion';
import './PhasesSection.css';

const detailsById: Record<string, ComponentType> = {
  '1': Phase1Detail,
  '2': Phase2Detail,
  '3': Phase3Detail,
  '4': Phase4Detail,
  '5': Phase5Detail,
};

export function PhasesSection() {
  const { isOpen, toggle } = useAccordion();

  return (
    <section className="phases-section" id="phases">
      <div className="inner">
        <Eyebrow>02 · The 5-Phase Workflow</Eyebrow>
        <SectionTitle>Five gates. <GradText>One source of truth.</GradText></SectionTitle>
        <SectionSubtitle>
          Click any phase below to expand. The flow is strict — Claude doesn't touch the codebase until the gate approves.
        </SectionSubtitle>

        <Reveal className="phases-flow">
          <div className="vflow">
            {phases.map((phase, i) => {
              const Detail = detailsById[phase.id];
              return (
                <div key={phase.id}>
                  <PhaseNode phase={phase} isActive={isOpen(phase.id)} onClick={() => toggle(phase.id)} />
                  <PhaseDetail id={phase.id} colorClass={phase.colorClass} isOpen={isOpen(phase.id)} fullWidth={phase.id === '3'}>
                    <Detail />
                  </PhaseDetail>
                  <PhaseConnector color={phase.connectorColor} height={i === phases.length - 1 ? 32 : undefined} />
                </div>
              );
            })}

            <GateNode />
            <PhaseConnector color="var(--green)" height={32} />
            <ProductionBanner />
          </div>
        </Reveal>
      </div>
    </section>
  );
}