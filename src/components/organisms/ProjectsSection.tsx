import { useState } from 'react';
import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { Reveal } from '../atoms/Reveal';
import { ProjectsFlowCanvas } from './ProjectsFlowCanvas';
import { DetailModal, DetailModalHeader } from '../molecules/DetailModal';
import { ProjectDetailPipeline } from '../molecules/ProjectDetailPipeline';
import { projects } from '../../data/projects';
import './ProjectsSection.css';

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId);

  return (
    <section className="proj-section" id="projects">
      <div className="inner">
        <Eyebrow>05 · Real Projects</Eyebrow>
        <SectionTitle>Where this workflow <GradText>actually shipped.</GradText></SectionTitle>
        <SectionSubtitle>
          Four production projects across React Native and Flutter, all built on the same 5-phase workflow. Click any project for the full case study.
        </SectionSubtitle>

        <Reveal className="proj-flow">
          <ProjectsFlowCanvas onSelect={setActiveId} />
        </Reveal>
      </div>

      <DetailModal isOpen={!!active} onClose={() => setActiveId(null)} colorClass={active?.colorClass}>
        {active && (
          <>
            <DetailModalHeader icon={active.icon} title={active.detail.title} tagline={active.detail.tag} />

            <ProjectDetailPipeline detail={active.detail} />

            <div className="pdi-metrics">
              {active.detail.metrics.map((metric) => (
                <div className="pdi-metric" key={metric.label}>
                  <div className="pdi-metric-val">{metric.value}</div>
                  <div className="pdi-metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="pdi-quote">{active.detail.quote}</div>
          </>
        )}
      </DetailModal>
    </section>
  );
}
