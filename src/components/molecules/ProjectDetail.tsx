import { LuTriangleAlert, LuCircleCheck } from 'react-icons/lu';
import type { Project } from '../../types';

interface ProjectDetailProps {
  project: Project;
  isOpen: boolean;
}

function ChallengeIcon() {
  return <LuTriangleAlert size={14} />;
}

function SolutionIcon() {
  return <LuCircleCheck size={14} />;
}

export function ProjectDetail({ project, isOpen }: ProjectDetailProps) {
  const { colorClass, icon, detail } = project;

  return (
    <div className={`proj-detail ${colorClass} ${isOpen ? 'open' : ''}`.trim()}>
      <div className="proj-detail-inner">
        <div className="pdi-header">
          <div className="pdi-icon-big">{icon}</div>
          <div>
            <div className="pdi-title">{detail.title}</div>
            <div className="pdi-tag">{detail.tag}</div>
          </div>
        </div>

        <div className="pdi-grid">
          <div className="pdi-box pdi-box-challenge">
            <div className="pdi-box-title"><ChallengeIcon /> The challenge</div>
            <div className="pdi-box-text">{detail.challenge}</div>
          </div>
          <div className="pdi-box pdi-box-solution">
            <div className="pdi-box-title"><SolutionIcon /> Workflow applied</div>
            <div className="pdi-box-text">{detail.solution}</div>
          </div>
        </div>

        <div className="pdi-metrics">
          {detail.metrics.map((metric) => (
            <div className="pdi-metric" key={metric.label}>
              <div className="pdi-metric-val">{metric.value}</div>
              <div className="pdi-metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="pdi-quote">{detail.quote}</div>
      </div>
    </div>
  );
}
