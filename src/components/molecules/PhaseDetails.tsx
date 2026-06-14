import { LuShield, LuClock, LuSearch, LuTerminal, LuBox, LuImage, LuCrosshair } from 'react-icons/lu';
import { DetailColumn, StepList, PromptBox, AnnotationList } from './PhaseDetailParts';
import { Phase3Diagram } from './Phase3Diagram';

const ShieldIcon = LuShield;
const ClockIcon = LuClock;
const SearchIcon = LuSearch;
const TerminalIcon = LuTerminal;
const CubeIcon = LuBox;
const ImageIcon = LuImage;
const CrosshairIcon = LuCrosshair;

export function Phase1Detail() {
  return (
    <>
      <DetailColumn icon={<ShieldIcon />} title="Manual blueprint">
        <StepList
          steps={[
            { bold: 'Atomic folders:', text: 'api → types → atoms → molecules → organisms → pages' },
            { bold: 'State:', text: 'Zustand stores per domain. MMKV for persistence. No context soup.' },
            { bold: 'Navigation:', text: 'Screen hierarchy, deep links, tabs mapped before any code.' },
            { bold: 'Security:', text: 'Token refresh strategy, RBAC, biometric auth placement.' },
          ]}
        />
      </DetailColumn>
      <DetailColumn icon={<ClockIcon />} title="Why manual?">
        <PromptBox label="The rule">
          Architecture decisions live with the project for years. AI has zero context on team conventions, business priorities, or long-term ownership. This is not a place to delegate.
        </PromptBox>
      </DetailColumn>
    </>
  );
}

export function Phase2Detail() {
  return (
    <>
      <DetailColumn icon={<SearchIcon />} title="What Claude checks">
        <StepList
          steps={[
            { bold: 'Pattern consistency:', text: 'apiServiceMethod used everywhere, no rogue axios calls' },
            { bold: 'Separation of concerns:', text: 'business logic in stores, not components' },
            { bold: 'Performance risks:', text: 'useEffect cleanup, render loops, memory leaks' },
            { bold: 'Naming conventions:', text: 'consistency across stores, hooks, types' },
          ]}
        />
      </DetailColumn>
      <DetailColumn icon={<TerminalIcon />} title="The audit prompt">
        <PromptBox label="Copy-paste this">
          "Read this folder structure in depth. Identify any gaps, inconsistencies, or areas conflicting with React Native best practices. Write findings in detail."
        </PromptBox>
      </DetailColumn>
    </>
  );
}

export function Phase3Detail() {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <div className="vfd-col-title" style={{ marginBottom: 18 }}>
          <CubeIcon />
          The inner cycle
        </div>
        <Phase3Diagram />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <DetailColumn title="Real annotations from my plan.md">
          <AnnotationList
            items={[
              '// use existing apiServiceMethod, not direct axios',
              '// NO — this is PATCH, not PUT',
              '// remove caching — store handles it',
              '// 401s handled globally — no retry logic here',
              '// belongs in organisms/, not molecules/',
            ]}
          />
        </DetailColumn>
        <DetailColumn title="The implementation command">
          <PromptBox label="When plan is approved">
            "Implement it all. Mark each task complete in plan.md. Don't stop. No unnecessary comments. No any/unknown types. Run typecheck continuously."
          </PromptBox>
        </DetailColumn>
      </div>
    </>
  );
}

export function Phase4Detail() {
  return (
    <>
      <DetailColumn icon={<ImageIcon />} title="The Figma loop">
        <StepList
          steps={[
            { bold: 'Screenshot + describe', text: 'behavior & props' },
            { bold: 'Claude generates', text: 'TS + StyleSheet' },
            { bold: 'Test on real device', text: 'with hot reload' },
            { bold: 'Terse corrections', text: 'until pixel-perfect' },
          ]}
        />
      </DetailColumn>
      <DetailColumn title="My correction style">
        <AnnotationList
          items={[
            '"wider"',
            '"still cropped on right edge"',
            '"font weight 600, not bold"',
            '"gap is 2px too large"',
            '"match TaskCard shadow exactly"',
          ]}
        />
      </DetailColumn>
    </>
  );
}

export function Phase5Detail() {
  return (
    <>
      <DetailColumn icon={<CrosshairIcon />} title="What Claude generates">
        <StepList
          steps={[
            { bold: 'GitHub Actions YAML:', text: 'build, lint, typecheck, test, notify' },
            { bold: 'Fastlane lanes:', text: 'App Store + Play Store submission' },
            { bold: 'EAS build profiles:', text: 'internal, staging, production' },
            { bold: 'Pre-push code review:', text: 'types, anti-patterns, arch conformance' },
          ]}
        />
      </DetailColumn>
      <DetailColumn title="Non-negotiable">
        <PromptBox label="The rule">
          Never run an AI-generated deployment script without understanding every command it contains. Especially secrets, env switching, and release automation.
        </PromptBox>
      </DetailColumn>
    </>
  );
}