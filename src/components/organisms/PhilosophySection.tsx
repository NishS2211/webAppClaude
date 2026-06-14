import { LuZap, LuShieldCheck, LuLock } from 'react-icons/lu';
import { Eyebrow, SectionTitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { Reveal } from '../atoms/Reveal';
import { TrustChain } from '../molecules/TrustChain';
import { PrincipleCard } from '../molecules/PrincipleCard';
import './PhilosophySection.css';

const principles = [
  {
    icon: <LuZap />,
    title: 'AI accelerates',
    text: 'Repetitive work disappears. More time for design, problem-solving, and shipping.',
    color: 'var(--brand)',
    colorBg: 'var(--brand-l)',
  },
  {
    icon: <LuShieldCheck />,
    title: 'Humans decide',
    text: 'Business rules, architecture, conventions. AI has zero context on what your team actually needs.',
    color: 'var(--cyan)',
    colorBg: 'var(--cyan-l)',
  },
  {
    icon: <LuLock />,
    title: 'You own it',
    text: 'Accountability comes from process, not source. AI, Stack Overflow, contractor — same rule.',
    color: 'var(--rose)',
    colorBg: 'var(--rose-l)',
  },
];

export function PhilosophySection() {
  return (
    <section className="phil-section" id="philosophy">
      <div className="inner">
        <Eyebrow>01 · The Trust Chain</Eyebrow>
        <SectionTitle>Where the <GradText>human stays in charge.</GradText></SectionTitle>

        <Reveal className="phil-trust-chain">
          <TrustChain />
        </Reveal>

        <div className="phil-principles">
          {principles.map((p) => (
            <PrincipleCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}