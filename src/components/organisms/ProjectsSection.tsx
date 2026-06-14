import { Eyebrow, SectionTitle, SectionSubtitle } from '../atoms/SectionHeading';
import { GradText } from '../atoms/GradText';
import { ProjectCard } from '../molecules/ProjectCard';
import { ProjectDetail } from '../molecules/ProjectDetail';
import { projects } from '../../data/projects';
import { useAccordion } from '../../hooks/useAccordion';
import './ProjectsSection.css';

export function ProjectsSection() {
  const { isOpen, toggle } = useAccordion();

  return (
    <section className="proj-section" id="projects">
      <div className="inner">
        <Eyebrow>05 · Real Projects</Eyebrow>
        <SectionTitle>Where this workflow <GradText>actually shipped.</GradText></SectionTitle>
        <SectionSubtitle>
          Four production projects across React Native and Flutter. Each card opens a full case study — the real challenge, the workflow applied, and the metrics that came out.
        </SectionSubtitle>

        <div className="proj-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={isOpen(project.id)}
              onClick={() => toggle(project.id)}
            />
          ))}
          {projects.map((project) => (
            <ProjectDetail key={project.id} project={project} isOpen={isOpen(project.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}