import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { ConnectorCard } from '../molecules/ConnectorCard';
import { ConnectorDetail } from '../molecules/ConnectorDetail';
import { connectors } from '../../data/connectors';
import { useAccordion } from '../../hooks/useAccordion';
import './ConnectorsSection.css';

export function ConnectorsSection() {
  const { isOpen, toggle } = useAccordion();

  return (
    <section className="conn-section" id="connectors">
      <div className="conn-bg-pattern" />
      <div className="inner">
        <Eyebrow>03 · Power-Ups & Connectors</Eyebrow>
        <SectionTitle>Plug Claude into your <GradText>actual tools.</GradText></SectionTitle>
        <SectionSubtitle>
          No more copy-pasting between apps. Each card below opens a 3-step setup guide and real example prompts you can steal today.
        </SectionSubtitle>

        <div className="conn-grid">
          {connectors.map((connector) => (
            <ConnectorCard
              key={connector.id}
              connector={connector}
              isActive={isOpen(connector.id)}
              onClick={() => toggle(connector.id)}
            />
          ))}
          {connectors.map((connector) => (
            <ConnectorDetail key={connector.id} connector={connector} isOpen={isOpen(connector.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}