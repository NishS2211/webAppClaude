import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { TokenHero } from '../molecules/TokenHero';
import { TokenTechCard } from '../molecules/TokenTechCard';
import { tokenTechniques } from '../../data/tokenTechniques';
import { useMultiToggle } from '../../hooks/useMultiToggle';
import './TokenSection.css';

export function TokenSection() {
  const { isOpen, toggle } = useMultiToggle();

  return (
    <section className="token-section" id="tokens">
      <div className="inner">
        <Eyebrow>04 · Token Efficiency</Eyebrow>
        <SectionTitle>Same output. <GradText>Less money.</GradText></SectionTitle>
        <SectionSubtitle>
          Every wasted token = wasted dollars. These five techniques cut my AI bills by roughly a fifth without losing quality. Click each to expand.
        </SectionSubtitle>

        <TokenHero />

        <div className="tok-tech-grid">
          {tokenTechniques.map((technique) => (
            <TokenTechCard
              key={technique.id}
              technique={technique}
              isOpen={isOpen(technique.id)}
              onClick={() => toggle(technique.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}