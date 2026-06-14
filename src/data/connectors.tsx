import { SiFigma, SiPostman, SiGoogledrive, SiGmail, SiGooglecalendar } from 'react-icons/si';
import { LuSquareTerminal, LuZap, LuTarget, LuFolderOpen, LuMailCheck, LuClock, LuRocket } from 'react-icons/lu';
import type { Connector } from '../types';

export const connectors: Connector[] = [
  {
    id: 'figma',
    colorClass: 'cc-figma',
    name: 'Figma',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#F24E1E,#FF7262)',
    logo: <SiFigma />,
    description: 'Claude reads your Figma frames directly — extracts design tokens, component hierarchy, and generates React Native code from the real design data.',
    tags: ['Design → Code', 'FigJam Diagrams'],
    detail: {
      title: 'Figma × Claude',
      tagline: 'Skip the screenshot dance — Claude reads your Figma file directly.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Open Claude → Settings → Connectors → Search "Figma" → Connect with your Figma account.',
          screen: (
            <>
              <span className="cmt">// Settings → Connectors</span><br />
              <span className="acc">▸</span> Figma <span className="br">[Connect]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Select & share',
          text: 'Open your Figma file, select a frame/component, then come back to Claude. Paste the URL or just say "use my selection".',
          screen: (
            <>
              <span className="cmt">// In Figma</span><br />
              Select frame → copy link<br />
              <span className="acc">→</span> <span className="br">figma.com/file/xyz...</span>
            </>
          ),
        },
        {
          num: 3,
          title: 'Ask Claude',
          text: 'Ask for code, design tokens, or even a FigJam diagram. Claude can also create new files and write components straight into your Figma project.',
          screen: (
            <>
              <span className="cmt">// Tool used:</span><br />
              <span className="acc">get_design_context</span><br />
              <span className="acc">use_figma</span> (create)
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Get design context for <span className="hl">[my Figma URL]</span> and generate a React Native component with TypeScript."</> },
        { text: <>"Read this Figma frame, extract all color variables and spacing tokens, and update my <span className="hl">theme.ts</span> file."</> },
        { text: <>"Create a FigJam flowchart showing the DVIR inspection lifecycle: <span className="hl">draft → submitted → approved → archived</span>."</> },
      ],
      useCase: {
        icon: <LuZap />,
        title: 'In my workflow',
        text: <>During Phase 4, instead of screenshotting and describing — I paste the Figma URL. Claude reads the actual component tree. <strong>Saves ~30 mins per screen.</strong></>,
        bg: 'linear-gradient(135deg,#FEF2EE,#FFF7F4)',
        borderColor: '#F24E1E',
        titleColor: '#F24E1E',
      },
    },
  },
  {
    id: 'postman',
    colorClass: 'cc-postman',
    name: 'Postman',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#FF6C37,#F89F35)',
    logo: <SiPostman />,
    description: 'Claude reads your collections, generates TypeScript types from endpoints, syncs OpenAPI specs, and flags breaking changes.',
    tags: ['API Types', 'Spec Sync'],
    detail: {
      title: 'Postman × Claude',
      tagline: 'API truth lives in Postman. Claude can read it directly.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Settings → Connectors → Search "Postman" → Add your Postman API key. Claude now has read access to all your workspaces.',
          screen: (
            <>
              <span className="cmt">// Settings → Connectors</span><br />
              <span className="acc">▸</span> Postman <span className="br">[API Key]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference',
          text: 'Ask Claude to search across workspaces, collections, or specific requests. No need to manually copy endpoints anymore.',
          screen: (
            <>
              <span className="cmt">// Tools available:</span><br />
              <span className="acc">searchPostmanElements</span><br />
              <span className="acc">getCollection</span>
            </>
          ),
        },
        {
          num: 3,
          title: 'Generate',
          text: 'Generate TypeScript types, API service methods, or even sync changes back to your collection.',
          screen: (
            <>
              <span className="cmt">// Output:</span><br />
              <span className="acc">interface</span> Vehicle <span className="br">{'{...}'}</span><br />
              <span className="acc">apiService.getVehicles()</span>
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Search my Postman workspace for the <span className="hl">HDFleet Vehicles API</span> collection and generate TypeScript types for all responses."</> },
        { text: <>"Get the <span className="hl">/dvir/submit</span> endpoint from my Postman, then create the matching <span className="hl">apiServiceMethod</span> in our codebase pattern."</> },
        { text: <>"Generate an OpenAPI 3.0 spec from my <span className="hl">Fleet Tracking Collection</span> so I can share it with the backend team."</> },
      ],
      useCase: {
        icon: <LuTarget />,
        title: 'In my workflow',
        text: <>During Phase 3 planning, Claude pulls actual API contracts from Postman. Types match the real API — <strong>zero manual transcription</strong>, zero drift.</>,
        bg: 'linear-gradient(135deg,#FFF4EE,#FFF9F3)',
        borderColor: '#FF6C37',
        titleColor: '#FF6C37',
      },
    },
  },
  {
    id: 'drive',
    colorClass: 'cc-drive',
    name: 'Google Drive',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#1FA463,#4285F4)',
    logo: <SiGoogledrive />,
    description: 'Share a PRD, architecture doc, or requirement spreadsheet via Drive — Claude reads it directly and uses it as planning context.',
    tags: ['Doc Context', 'PRD Reader'],
    detail: {
      title: 'Google Drive × Claude',
      tagline: 'Your PRDs, specs, and architecture docs — readable on demand.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Settings → Connectors → Google Drive → OAuth with your Google account. Set permission level (read-only is recommended).',
          screen: (
            <>
              <span className="cmt">// OAuth scope:</span><br />
              <span className="acc">drive.readonly</span><br />
              <span className="br">[Authorize]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference',
          text: 'Drop a Drive link, mention a file name, or ask Claude to search. Works with Docs, Sheets, Slides, and PDFs.',
          screen: (
            <>
              <span className="cmt">// Mention any of:</span><br />
              <span className="acc">@HDFleet-PRD-v2</span><br />
              drive.google.com/...
            </>
          ),
        },
        {
          num: 3,
          title: 'Use as context',
          text: 'Claude reads the doc and uses it as Phase 1 / Phase 3 input — without you copying entire paragraphs into chat.',
          screen: (
            <>
              <span className="cmt">// Result:</span><br />
              README.md generated<br />
              <span className="acc">from PRD context</span>
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Read my <span className="hl">HDFleet DVIR PRD</span> in Drive and create a phase-3 README.md scoped only to the inspection submit flow."</> },
        { text: <>"Find my <span className="hl">Decor CDI tablet support spec</span> and list every screen mentioned with its priority."</> },
        { text: <>"Open the architecture doc <span className="hl">linked here</span>, audit it against our actual codebase, and flag inconsistencies."</> },
      ],
      useCase: {
        icon: <LuFolderOpen />,
        title: 'In my workflow',
        text: <>Phase 1 and 2 lean on this heavily. <strong>I never paste a PRD into chat anymore.</strong> Claude pulls fresh from Drive every time, so context is always current.</>,
        bg: 'linear-gradient(135deg,#ECFDF5,#F0FDF4)',
        borderColor: '#1FA463',
        titleColor: '#1FA463',
      },
    },
  },
  {
    id: 'gmail',
    colorClass: 'cc-gmail',
    name: 'Gmail',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#EA4335,#FBBC04)',
    logo: <SiGmail />,
    description: 'Pull client feedback from email threads straight into plan.md. No more manual extraction of change requests.',
    tags: ['Client Context', 'Thread Search'],
    detail: {
      title: 'Gmail × Claude',
      tagline: 'Client feedback → plan.md in seconds.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Connectors → Gmail → OAuth. Choose what you want Claude to access (read-only is safe for client work).',
          screen: (
            <>
              <span className="cmt">// Scope:</span><br />
              <span className="acc">gmail.readonly</span><br />
              <span className="acc">gmail.modify</span> (optional)
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference',
          text: 'Ask Claude to search threads by sender, subject, or content. Filter by date, label, or attachment.',
          screen: (
            <>
              <span className="cmt">// Filter by:</span><br />
              from:client@decor.com<br />
              subject:DVIR feedback
            </>
          ),
        },
        {
          num: 3,
          title: 'Extract & act',
          text: 'Claude summarizes thread, extracts change requests as a checklist, and can draft a reply in your tone.',
          screen: (
            <>
              <span className="cmt">// Output:</span><br />
              <span className="acc">[ ]</span> Fix toggle lock<br />
              <span className="acc">[ ]</span> Update file upload UI
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Find the latest email from <span className="hl">CDI client</span> about tablet support and extract all change requests as a bulleted list."</> },
        { text: <>"Search Gmail for any thread mentioning <span className="hl">DVIR template</span> in the last 30 days and summarize the requirements evolution."</> },
        { text: <>"Draft a reply to the client thread about <span className="hl">map performance</span> — explain the O(n) clustering refactor in non-technical terms."</> },
      ],
      useCase: {
        icon: <LuMailCheck />,
        title: 'In my workflow',
        text: <>After client feedback emails, I ask Claude to extract change requests as a checklist. <strong>Paste straight into plan.md annotations.</strong> Zero manual extraction.</>,
        bg: 'linear-gradient(135deg,#FEF2F2,#FFF5F5)',
        borderColor: '#EA4335',
        titleColor: '#EA4335',
      },
    },
  },
  {
    id: 'calendar',
    colorClass: 'cc-calendar',
    name: 'Google Calendar',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#4285F4,#34A853)',
    logo: <SiGooglecalendar />,
    description: 'Realistic sprint planning. Ask "is this feasible by Friday?" — Claude checks your actual calendar before estimating.',
    tags: ['Realistic Estimates', 'Sprint Planning'],
    detail: {
      title: 'Google Calendar × Claude',
      tagline: 'Realistic timelines, not optimistic ones.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Connectors → Calendar → OAuth. Claude can read your events and optionally create new ones.',
          screen: (
            <>
              <span className="cmt">// Scope:</span><br />
              <span className="acc">calendar.events</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference',
          text: 'Mention dates, deadlines, or just "this week". Claude checks your actual availability.',
          screen: (
            <>
              <span className="cmt">// Auto-checked:</span><br />
              events this week<br />
              free slots
            </>
          ),
        },
        {
          num: 3,
          title: 'Plan honestly',
          text: 'Claude estimates feature scope against your real available hours — surfaces conflicts, suggests realistic dates.',
          screen: (
            <>
              <span className="cmt">// Reality check:</span><br />
              <span className="acc">3 meetings Mon-Tue</span><br />
              <span className="br">est: 12 dev hours</span>
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Given my calendar this week, is the <span className="hl">DVIR file upload refactor</span> feasible by Friday?"</> },
        { text: <>"Block <span className="hl">3 hours of focus time</span> tomorrow for the MapScreen clustering implementation."</> },
        { text: <>"Show all my <span className="hl">CDI client syncs</span> this month and summarize what was discussed across them."</> },
      ],
      useCase: {
        icon: <LuClock />,
        title: 'In my workflow',
        text: <>Sprint planning gets honest. Instead of "I can do it by Friday" — Claude looks at my actual week and gives <strong>a number I can defend to PM.</strong></>,
        bg: 'linear-gradient(135deg,#EFF6FF,#F0F9FF)',
        borderColor: '#4285F4',
        titleColor: '#4285F4',
      },
    },
  },
  {
    id: 'code',
    colorClass: 'cc-code',
    name: 'Claude Code CLI',
    status: 'Power Mode',
    statusColor: 'var(--brand)',
    logoBg: 'linear-gradient(135deg,#6366f1,#06b6d4)',
    logo: <LuSquareTerminal />,
    description: 'Terminal-based agentic dev. Multi-file refactors in one command. The "Implement it all" workflow weaponized.',
    tags: ['Multi-file Edits', 'Agentic'],
    detail: {
      title: 'Claude Code CLI',
      tagline: 'The "Implement it all" command, weaponized for your whole repo.',
      steps: [
        {
          num: 1,
          title: 'Install',
          text: 'One npm command. Runs in any terminal. Works across macOS, Linux, and Windows (WSL).',
          screen: (
            <>
              <span className="cmt">// In terminal:</span><br />
              <span className="acc">npm install -g</span><br />
              @anthropic-ai/<span className="br">claude-code</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Run in repo',
          text: 'cd into your project folder, type claude, login once. Claude now reads your entire codebase.',
          screen: (
            <>
              <span className="cmt">// In repo root:</span><br />
              $ <span className="acc">cd hdfleet-app/</span><br />
              $ <span className="br">claude</span>
            </>
          ),
        },
        {
          num: 3,
          title: 'Execute plans',
          text: 'Hand it your annotated plan.md, run "implement it all". Claude edits multiple files, runs typecheck, marks tasks done.',
          screen: (
            <>
              <span className="cmt">// Inside CLI:</span><br />
              {'> '}<span className="acc">read plan.md and</span><br />
              {'  '}<span className="acc">implement it all</span>
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Read <span className="hl">plan.md</span>. Implement all tasks. Mark them complete as you go. Run typecheck after each file. Do not stop."</> },
        { text: <>"Refactor every component in <span className="hl">src/screens/Map/</span> to use the new VehicleMarkerLayer. Preserve public hooks via shim."</> },
        { text: <>"Audit all <span className="hl">.tsx</span> files for any/unknown types. Replace with proper types. Update tests."</> },
      ],
      useCase: {
        icon: <LuRocket />,
        title: 'In my workflow',
        text: <>For multi-file refactors (MapScreen, filterStore), Claude Code is the difference between <strong>2-hour sessions and 2-day sessions.</strong> Hand it the plan, watch it work.</>,
        bg: 'linear-gradient(135deg,#EEF2FF,#F0F4FF)',
        borderColor: '#6366f1',
        titleColor: '#6366f1',
      },
    },
  },
];