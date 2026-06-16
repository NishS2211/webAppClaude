import type { ReactNode } from 'react';

export interface AgendaItem {
  id: string;
  href: string;
  num: string;
  icon: ReactNode;
  name: string;
  tag: string;
  colorStart: string;
  colorEnd: string;
}

export type PhaseColor = 'vf-p1' | 'vf-p2' | 'vf-p3' | 'vf-p4' | 'vf-p5';

export interface PhaseMeta {
  id: string;
  num: string;
  name: string;
  sub: string;
  tag: string;
  colorClass: PhaseColor;
  connectorColor: string;
}

export interface ConnectorStep {
  num: number;
  title: string;
  text: string;
  screen: ReactNode;
}

export interface ConnectorPrompt {
  text: ReactNode;
}

export interface ConnectorUseCase {
  icon: ReactNode;
  title: string;
  text: ReactNode;
}

export interface ConnectorDetail {
  title: string;
  tagline: string;
  steps: ConnectorStep[];
  prompts: ConnectorPrompt[];
  useCase: ConnectorUseCase;
}

export interface Connector {
  id: string;
  colorClass: string;
  name: string;
  status: string;
  statusColor?: string;
  logoBg: string;
  logo: ReactNode;
  description: string;
  tags: string[];
  detail: ConnectorDetail;
}

export interface TokenUsedIn {
  id: string;
  name: string;
  icon: ReactNode;
}

export interface TokenTechnique {
  id: string;
  colorClass: string;
  icon: ReactNode;
  name: string;
  saving: string;
  description: string;
  detail: ReactNode;
  usedIn?: TokenUsedIn[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectDetail {
  title: string;
  tag: string;
  challenge: ReactNode;
  solution: ReactNode;
  metrics: ProjectMetric[];
  quote: ReactNode;
}

export interface Project {
  id: string;
  colorClass: string;
  icon: ReactNode;
  bannerTag: string;
  name: string;
  client: string;
  stack: string[];
  challenge: string;
  detail: ProjectDetail;
}