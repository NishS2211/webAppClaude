import { useState } from 'react';
import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { Reveal } from '../atoms/Reveal';
import { PhasesFlowCanvas } from './PhasesFlowCanvas';
import { DetailModal, DetailModalHeader } from '../molecules/DetailModal';
import { PhaseVisualFlow } from '../molecules/PhaseVisualFlow';
import { GateDetail, ProductionDetail } from '../molecules/PhaseExtraDetails';
import { phases } from '../../data/phases';
import './PhasesSection.css';

export function PhasesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  let colorClass: string | undefined;
  let content: React.ReactNode = null;

  if (activeId === 'gate') {
    colorClass = 'vf-gate';
    content = <GateDetail />;
  } else if (activeId === 'production') {
    colorClass = 'vf-production-modal';
    content = <ProductionDetail />;
  } else if (activeId) {
    const phase = phases.find((p) => p.id === activeId);
    if (phase) {
      colorClass = phase.colorClass;
      content = (
        <>
          <DetailModalHeader
            icon={<span className="dm-header-num">{phase.num}</span>}
            title={phase.name}
            tagline={phase.sub}
          />
          <PhaseVisualFlow phaseId={activeId} />
        </>
      );
    }
  }

  return (
    <section className="phases-section" id="phases">
      <div className="inner">
        <Eyebrow>02 · The 5-Phase Workflow</Eyebrow>
        <SectionTitle>Five gates. <GradText>One source of truth.</GradText></SectionTitle>
        <SectionSubtitle>
          Click any node to see how it works. The flow is strict — Claude doesn't touch the codebase until the gate approves.
        </SectionSubtitle>

        <Reveal className="phases-flow">
          <PhasesFlowCanvas onSelect={setActiveId} />
        </Reveal>
      </div>

      <DetailModal isOpen={!!activeId} onClose={() => setActiveId(null)} colorClass={colorClass}>
        {content}
      </DetailModal>
    </section>
  );
}