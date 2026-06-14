import type { PhaseMeta } from '../types';

export const phases: PhaseMeta[] = [
  { id: '1', num: '01', name: 'Architecture & Design', sub: 'Folder structure, state, navigation, security', tag: '100% Manual', colorClass: 'vf-p1', connectorColor: 'var(--cyan)' },
  { id: '2', num: '02', name: 'AI Review & Audit', sub: 'Claude audits architecture, you decide', tag: 'Claude Audits', colorClass: 'vf-p2', connectorColor: 'var(--green)' },
  { id: '3', num: '03', name: 'Research → Plan → Annotate → Implement', sub: 'The critical cycle. No code until plan is approved.', tag: 'Most Critical', colorClass: 'vf-p3', connectorColor: 'var(--amber)' },
  { id: '4', num: '04', name: 'UI Build — Figma → React Native', sub: 'Screenshot, generate, test on device, refine', tag: '40-50% AI', colorClass: 'vf-p4', connectorColor: 'var(--purple)' },
  { id: '5', num: '05', name: 'CI/CD & Deployment', sub: 'YAML, Fastlane, EAS — AI generates, you sign off', tag: 'Human Gate', colorClass: 'vf-p5', connectorColor: 'var(--brand)' },
];