import { useState } from 'react';
import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { Reveal } from '../atoms/Reveal';
import { ConnectorsFlowCanvas } from './ConnectorsFlowCanvas';
import { DetailModal, DetailModalHeader } from '../molecules/DetailModal';
import { ConnectorStepsFlow } from '../molecules/ConnectorStepsFlow';
import { connectors } from '../../data/connectors';
import './ConnectorsSection.css';

export function ConnectorsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = connectors.find((c) => c.id === activeId);

  return (
    <section className="conn-section" id="connectors">
      <div className="conn-bg-pattern" />
      <div className="inner">
        <Eyebrow>03 · Power-Ups & Connectors</Eyebrow>
        <SectionTitle>Plug Claude into your <GradText>actual tools.</GradText></SectionTitle>
        <SectionSubtitle>
          Claude sits at the center with a two-way connection to every tool — it reads from your apps and writes back. Click any connector to see real prompts you can use today.
        </SectionSubtitle>

        <Reveal className="conn-flow">
          <ConnectorsFlowCanvas onSelect={setActiveId} />
        </Reveal>
      </div>

      <DetailModal isOpen={!!active} onClose={() => setActiveId(null)} colorClass={active?.colorClass}>
        {active && (
          <>
            <DetailModalHeader
              icon={active.logo}
              iconBg={active.logoBg}
              title={active.detail.title}
              tagline={active.detail.tagline}
            />

            <ConnectorStepsFlow steps={active.detail.steps} />

            <div className="cdi-examples-title">Real prompts you can use today</div>
            <div className="cdi-prompts">
              {active.detail.prompts.map((prompt, i) => (
                <div className="cdi-prompt" key={i}>
                  <div className="cdi-prompt-tag">Prompt</div>
                  <div className="cdi-prompt-text">{prompt.text}</div>
                </div>
              ))}
            </div>

            <div className="cdi-use">
              <div className="cdi-use-icon">{active.detail.useCase.icon}</div>
              <div>
                <div className="cdi-use-title">{active.detail.useCase.title}</div>
                <div className="cdi-use-text">{active.detail.useCase.text}</div>
              </div>
            </div>
          </>
        )}
      </DetailModal>
    </section>
  );
}
