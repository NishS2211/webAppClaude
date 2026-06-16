import { useState } from 'react';
import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { Reveal } from '../atoms/Reveal';
import { TokenHero } from '../molecules/TokenHero';
import { TokenLayout } from './TokenLayout';
import { DetailModal, DetailModalHeader } from '../molecules/DetailModal';
import { tokenTechniques } from '../../data/tokenTechniques';
import './TokenSection.css';

export function TokenSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = tokenTechniques.find((t) => t.id === activeId);

  return (
    <section className="token-section" id="tokens">
      <div className="inner">
        <Eyebrow>04 · Token Efficiency</Eyebrow>
        <SectionTitle>Same output. <GradText>Less money.</GradText></SectionTitle>
        <SectionSubtitle>
          Every wasted token is a wasted dollar. Six techniques that cut AI bills by roughly 30% — without losing quality. Click any technique to see how.
        </SectionSubtitle>

        <TokenHero />

        <Reveal className="token-flow">
          <TokenLayout onSelect={setActiveId} />
        </Reveal>
      </div>

      <DetailModal isOpen={!!active} onClose={() => setActiveId(null)} colorClass={active?.colorClass}>
        {active && (
          <>
            <DetailModalHeader icon={active.icon} title={active.name} tagline={active.saving} />
            <div className="ttc-modal-desc">{active.description}</div>
            {active.usedIn && active.usedIn.length > 0 && (
              <div className="ttc-used-in">
                <span className="ttc-used-in-label">Used in</span>
                {active.usedIn.map((p) => (
                  <span className="ttc-used-in-chip" key={p.id}>{p.icon} {p.name}</span>
                ))}
              </div>
            )}
            {active.detail}
          </>
        )}
      </DetailModal>
    </section>
  );
}
