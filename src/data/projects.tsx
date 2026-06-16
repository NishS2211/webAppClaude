import { LuTruck, LuHardHat, LuBuilding2, LuMonitor } from 'react-icons/lu';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fleet',
    colorClass: 'pc-fleet',
    icon: <LuTruck />,
    bannerTag: 'React Native',
    name: 'HDFleet',
    client: 'Fleet management · Tracking · DVIR',
    stack: ['RN', 'Zustand', 'MMKV', 'STOMP/WS', 'Firebase'],
    challenge: 'MapScreen lagged with 500+ vehicles. Loader hangs across the app. DVIR module needed offline-first inspection with edit-mode locks. Multi-month, high-stakes refactor.',
    detail: {
      title: 'HDFleet — Fleet Management',
      tag: 'React Native · TypeScript · Zustand · MMKV · WebSocket/STOMP · Firebase',
      challenge: (
        <>MapScreen lagged badly with 500+ vehicles. <code>O(n²)</code> marker updates on every WebSocket tick. App-wide hangs traced to a global <code>CustomLoader</code> modal. DVIR module needed full offline-first inspection flow with edit-mode locks, checklist validation, and file uploads.</>
      ),
      solution: (
        <>Phase 1: designed map refactor manually — <code>Promise.allSettled</code>, Map-based O(1) WS lookups, React.memo gating, O(n) grid-bucket clustering. Phase 3: Claude implemented only after fully annotated plan.md preserved all public hooks via shim. DVIR built with <code>isTemplateUserSelected</code> ref pattern locked into plan.</>
      ),
      metrics: [
        { value: 'O(1)', label: 'WebSocket updates' },
        { value: '0', label: 'Breaking changes' },
        { value: '~25', label: 'Deps simplified' },
        { value: '100%', label: 'Loader hangs gone' },
      ],
      quote: (
        <><strong>Key win:</strong> filterStore.ts consolidation collapsed 2 Zustand stores + React Context with ~25 dependencies into one cleanly-structured store with selector hooks and a compatibility shim. Existing consumers — zero breaking changes.</>
      ),
    },
  },
  {
    id: 'decor',
    colorClass: 'pc-decor',
    icon: <LuHardHat />,
    bannerTag: 'React Native',
    name: 'Decor / CDI',
    client: 'Contract Decor International · Project mgmt',
    stack: ['RN', 'TS', 'Keystore', 'FaceID', 'FCM'],
    challenge: 'Retrofit full iPad landscape support across 20+ production screens — without breaking the phone layout. Plus biometric auth (PIN + Face ID) with Android Keystore bugs lurking.',
    detail: {
      title: 'Decor / CDI — Project Management',
      tag: 'React Native · TypeScript · Android Keystore · Face ID · Firebase modular API',
      challenge: (
        <>Retrofit iPad landscape support across 20+ screens without breaking phone layouts. Plus biometric auth (PIN + Face ID), Android Keystore bugs to chase, FCM modular API migration, persistent sidebar logic in CoreNavigator, and CustomBottomSheet animation fixes.</>
      ),
      solution: (
        <>Designed <code>useDeviceType</code> hook manually. Claude audited every affected screen and produced a categorized list. plan.md annotation: <code>"persistent sidebar only in CoreNavigator, not per-screen."</code> Phase 4 Figma loop used for iPad-specific layouts. Zero regressions on phone.</>
      ),
      metrics: [
        { value: '20+', label: 'Screens retrofitted' },
        { value: '0', label: 'Phone regressions' },
        { value: 'PIN+FaceID', label: 'Biometric auth' },
        { value: '3', label: 'Drawer modes' },
      ],
      quote: (
        <><strong>Key win:</strong> A single <code>useDeviceType</code> hook as the truth source for layout switching meant phone and tablet code paths shared 95% of the logic. New tablet screens just consumed the hook — no parallel codebase, no rewrites.</>
      ),
    },
  },
  {
    id: 'epp',
    colorClass: 'pc-epp',
    icon: <LuBuilding2 />,
    bannerTag: 'React Native',
    name: 'ePropertyPlus RN',
    client: 'Property management mobile app',
    stack: ['RN', 'Cordova', 'Fastlane', 'App Store'],
    challenge: 'Legacy React/Cordova app migrating to React Native. Foundational API architecture, app store submissions for the client, and a clean ground-up pattern library to set the tone.',
    detail: {
      title: 'ePropertyPlus RN — Property Mgmt',
      tag: 'React Native · TypeScript · Cordova migration · Fastlane · App Store/Play Store',
      challenge: (
        <>Legacy React/Cordova app needing migration to React Native. Foundational decisions: API architecture (<code>apiServiceMethod</code>, <code>apiEndPoints</code>, <code>project_types</code>), folder structure, navigation, store patterns. Plus client-side app store submissions.</>
      ),
      solution: (
        <>Phase 1 was the entire first month — architecture designed manually, then audited by Claude (Phase 2). Set the tone for every later project: atomic folders, Zustand domains, types-first, no <code>any</code>. Phase 5 lanes for App Store / Play Store submissions documented and reusable.</>
      ),
      metrics: [
        { value: 'Cordova→RN', label: 'Migration complete' },
        { value: 'Atomic', label: 'Folder pattern' },
        { value: 'Both', label: 'Stores shipped' },
        { value: 'Reusable', label: 'Pattern library' },
      ],
      quote: (
        <><strong>Key win:</strong> ePropertyPlus established the foundational architecture pattern reused across every later project — atomic folders, layered API services, Zustand state per domain. The same blueprint that runs HDFleet today started here.</>
      ),
    },
  },
  {
    id: 'dash',
    colorClass: 'pc-dash',
    icon: <LuMonitor />,
    bannerTag: 'Flutter · Desktop',
    name: 'Dash',
    client: 'Windows desktop · Fleet & insurance mgmt',
    stack: ['Flutter', 'Win Desktop', 'WebView', 'Maps SDK'],
    challenge: "Flutter on Windows for fleet/insurance ops. WebView-based Google Maps integration (Flutter native Maps wasn't desktop-ready). Custom UI components for desktop-scale workflows.",
    detail: {
      title: 'Dash — Windows Desktop',
      tag: 'Flutter · Windows · WebView · Google Maps SDK · Cross-platform',
      challenge: (
        <>Flutter on Windows desktop for fleet/insurance ops. Flutter's native <code>google_maps_flutter</code> didn't support desktop at the time. Custom UI components needed for desktop-scale workflows. Different platform, same accountability model.</>
      ),
      solution: (
        <>Phase 1: designed a WebView-based Maps integration manually — embedded Google Maps JS API inside a WebView widget with bidirectional message channel for marker/event communication. Phase 3 used heavily for state management (Provider + ChangeNotifier) and desktop window layouts.</>
      ),
      metrics: [
        { value: 'WebView', label: 'Maps integration' },
        { value: 'Win', label: 'Desktop deploy' },
        { value: '2-way', label: 'Msg channel' },
        { value: '100%', label: 'Same workflow' },
      ],
      quote: (
        <><strong>Key insight:</strong> The exact same workflow that runs React Native projects worked verbatim on a Flutter Windows desktop app. Architecture manual, Claude audits, plan.md cycle, Figma loop — none of it cared what framework was underneath.</>
      ),
    },
  },
];
