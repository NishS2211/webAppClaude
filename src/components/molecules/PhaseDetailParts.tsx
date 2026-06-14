import type { ReactNode } from 'react';

interface DetailColumnProps {
  icon?: ReactNode;
  title: ReactNode;
  children: ReactNode;
}

export function DetailColumn({ icon, title, children }: DetailColumnProps) {
  return (
    <div className="vfd-col">
      <div className="vfd-col-title">
        {icon}
        {title}
      </div>
      {children}
    </div>
  );
}

interface Step {
  bold: string;
  text: ReactNode;
}

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="vfd-steps">
      {steps.map((step, i) => (
        <div className="vfd-step" key={i}>
          <div className="vfd-step-dot"></div>
          <div><strong>{step.bold}</strong> {step.text}</div>
        </div>
      ))}
    </div>
  );
}

interface PromptBoxProps {
  label: string;
  children: ReactNode;
}

export function PromptBox({ label, children }: PromptBoxProps) {
  return (
    <div className="vfd-prompt">
      <div className="vfd-prompt-label">{label}</div>
      {children}
    </div>
  );
}

export function AnnotationList({ items }: { items: ReactNode[] }) {
  return (
    <div className="vfd-annot">
      {items.map((item, i) => (
        <div className="vfd-annot-item" key={i}>{item}</div>
      ))}
    </div>
  );
}