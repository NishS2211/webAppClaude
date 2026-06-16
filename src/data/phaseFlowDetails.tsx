import type { ReactNode } from 'react';
import {
  LuFolderTree,
  LuDatabase,
  LuRoute,
  LuShield,
  LuGitCompare,
  LuLayers,
  LuActivity,
  LuTag,
  LuCamera,
  LuFileCode,
  LuSmartphone,
  LuMessageSquare,
  LuWorkflow,
  LuRocket,
  LuBox,
  LuSearchCheck,
  LuLayoutTemplate,
  LuGauge,
  LuRuler,
  LuCheckCheck,
  LuEye,
  LuFileText,
  LuCheck,
  LuPencil,
  LuRotateCcw,
} from 'react-icons/lu';

export interface PhaseFlowPoint {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface PhaseFlowExtra {
  variant: 'rule' | 'prompt';
  label: string;
  text: ReactNode;
}

export interface PhaseFlowOutcome {
  icon: ReactNode;
  title: string;
  positive: boolean;
}

export interface PhaseFlowDetail {
  points: PhaseFlowPoint[];
  extras?: PhaseFlowExtra[];
  outcomes?: PhaseFlowOutcome[];
}

export const phaseFlowDetails: Record<string, PhaseFlowDetail> = {
  '1': {
    points: [
      { icon: <LuFolderTree />, title: 'Atomic folders', text: 'api → types → atoms → molecules → organisms → pages' },
      { icon: <LuDatabase />, title: 'State', text: 'Zustand stores per domain, MMKV persistence — no context soup' },
      { icon: <LuRoute />, title: 'Navigation', text: 'Screen hierarchy, deep links, tabs mapped before any code' },
      { icon: <LuShield />, title: 'Security', text: 'Token refresh, RBAC, biometric auth placement' },
    ],
    extras: [
      {
        variant: 'rule',
        label: 'Why manual?',
        text: 'Architecture decisions live with the project for years. AI has zero context on team conventions or long-term ownership — this is not a place to delegate.',
      },
    ],
  },
  '2': {
    points: [
      { icon: <LuGitCompare />, title: 'Pattern consistency', text: 'apiServiceMethod used everywhere — no rogue axios calls' },
      { icon: <LuLayers />, title: 'Separation of concerns', text: 'Business logic lives in stores, not components' },
      { icon: <LuActivity />, title: 'Performance risks', text: 'useEffect cleanup, render loops, memory leaks' },
      { icon: <LuTag />, title: 'Naming conventions', text: 'Consistency across stores, hooks, and types' },
    ],
    extras: [
      {
        variant: 'prompt',
        label: 'Copy-paste this',
        text: '"Read this folder structure in depth. Identify any gaps, inconsistencies, or areas conflicting with React Native best practices. Write findings in detail."',
      },
    ],
  },
  '4': {
    points: [
      { icon: <LuCamera />, title: 'Screenshot + describe', text: 'Behavior and props, straight from the Figma frame' },
      { icon: <LuFileCode />, title: 'Claude generates', text: 'TypeScript + StyleSheet, matching app conventions' },
      { icon: <LuSmartphone />, title: 'Test on device', text: 'Real device with hot reload' },
      { icon: <LuMessageSquare />, title: 'Terse corrections', text: 'Until pixel-perfect' },
    ],
    extras: [
      {
        variant: 'rule',
        label: 'My correction style',
        text: (
          <>
            "wider" · "still cropped on right edge" · "font weight 600, not bold" · "gap is 2px too large" · "match TaskCard shadow exactly"
          </>
        ),
      },
    ],
  },
  '5': {
    points: [
      { icon: <LuWorkflow />, title: 'GitHub Actions YAML', text: 'Build, lint, typecheck, test, notify' },
      { icon: <LuRocket />, title: 'Fastlane lanes', text: 'App Store + Play Store submission' },
      { icon: <LuBox />, title: 'EAS build profiles', text: 'Internal, staging, production' },
      { icon: <LuSearchCheck />, title: 'Pre-push review', text: 'Types, anti-patterns, architecture conformance' },
    ],
    extras: [
      {
        variant: 'rule',
        label: 'Non-negotiable',
        text: 'Never run an AI-generated deployment script without understanding every command it contains — especially secrets, env switching, and release automation.',
      },
    ],
  },
  gate: {
    points: [
      { icon: <LuLayoutTemplate />, title: 'Architecture', text: 'Matches the blueprint from Phase 1' },
      { icon: <LuFileCode />, title: 'Code quality', text: 'No any/unknown, typed end-to-end' },
      { icon: <LuGauge />, title: 'Performance', text: 'No render loops, leaks, or unnecessary re-fetches' },
      { icon: <LuRuler />, title: 'Standards', text: 'Naming, folder placement, lint and typecheck clean' },
    ],
    outcomes: [
      { icon: <LuCheck size={12} />, title: 'Accept', positive: true },
      { icon: <LuPencil size={12} />, title: 'Modify', positive: true },
      { icon: <LuRotateCcw size={12} />, title: 'Reject & re-scope', positive: false },
    ],
  },
  production: {
    points: [
      { icon: <LuCheckCheck />, title: 'Typed end-to-end', text: 'No any/unknown, lint and typecheck clean' },
      { icon: <LuWorkflow />, title: 'CI/CD wired up', text: 'Build, test, and deploy automated from Phase 5' },
      { icon: <LuEye />, title: 'Reviewed twice', text: 'Once by Claude in Phase 2, once by you at the gate' },
      { icon: <LuFileText />, title: 'Documented', text: 'plan.md is the audit trail for every decision made' },
    ],
  },
};

/** Phase 3's focus view centers on Phase3Diagram; these two cards sit alongside it. */
export const phase3Extras: PhaseFlowExtra[] = [
  {
    variant: 'rule',
    label: 'Real annotations from my plan.md',
    text: (
      <>
        // use existing apiServiceMethod, not direct axios<br />
        // NO — this is PATCH, not PUT<br />
        // 401s handled globally — no retry logic here<br />
        // belongs in organisms/, not molecules/
      </>
    ),
  },
  {
    variant: 'prompt',
    label: 'When plan is approved',
    text: '"Implement it all. Mark each task complete in plan.md. Don\'t stop. No unnecessary comments. No any/unknown types. Run typecheck continuously."',
  },
];
