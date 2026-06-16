import { LuShieldCheck, LuRocket } from 'react-icons/lu';
import { DetailModalHeader } from './DetailModal';
import { PhaseVisualFlow } from './PhaseVisualFlow';

export function GateDetail() {
  return (
    <>
      <DetailModalHeader
        icon={<LuShieldCheck />}
        title="Manual Validation Gate"
        tagline="Quality · Architecture · Performance · Standards"
      />
      <PhaseVisualFlow phaseId="gate" />
    </>
  );
}

export function ProductionDetail() {
  return (
    <>
      <DetailModalHeader
        icon={<LuRocket />}
        title="Production-ready code"
        tagline="App Store · Play Store · Customer hands"
      />
      <PhaseVisualFlow phaseId="production" />
    </>
  );
}