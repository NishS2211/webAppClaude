import type { CSSProperties, ReactNode } from 'react';
import { Reveal } from '../atoms/Reveal';
import './PrincipleCard.css';

interface PrincipleCardProps {
  icon: ReactNode;
  title: string;
  text: ReactNode;
  color: string;
  colorBg: string;
}

export function PrincipleCard({ icon, title, text, color, colorBg }: PrincipleCardProps) {
  const style = {
    '--pc': color,
    '--pc-bg': colorBg,
  } as CSSProperties;

  return (
    <Reveal className="phil-card" style={style}>
      <div className="phil-card-icon">{icon}</div>
      <div className="phil-card-title">{title}</div>
      <div className="phil-card-text">{text}</div>
    </Reveal>
  );
}