import { LuChevronDown } from 'react-icons/lu';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  return (
    <div className={`proj-card ${project.colorClass} ${isActive ? 'active' : ''}`.trim()} onClick={onClick}>
      <div className="proj-banner">
        <div className="proj-banner-pattern" />
        <div className="proj-banner-icon">{project.icon}</div>
        <div className="proj-banner-tag">{project.bannerTag}</div>
      </div>
      <div className="proj-body">
        <div className="proj-name">{project.name}</div>
        <div className="proj-client">{project.client}</div>
        <div className="proj-stack">
          {project.stack.map((tech) => (
            <span className="proj-stack-chip" key={tech}>{tech}</span>
          ))}
        </div>
        <div className="proj-challenge-pre">The Challenge</div>
        <div className="proj-challenge-text">{project.challenge}</div>
        <div className="proj-expand">
          Open full case study
          <LuChevronDown />
        </div>
      </div>
    </div>
  );
}
