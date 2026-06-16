import { SiFigma, SiPostman, SiGmail, SiGooglecalendar, SiJirasoftware, SiUpwork, SiSlack } from 'react-icons/si';
import { LuZap, LuTarget, LuListChecks, LuMailCheck, LuClock, LuFileText, LuMessageSquare, LuKanban, LuLayoutDashboard } from 'react-icons/lu';
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
          text: 'Ask for code, design tokens, or a FigJam diagram. Claude can also write components straight into your Figma project.',
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
          text: 'Generate TypeScript types, API service methods, or sync changes back to your collection.',
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
      },
    },
  },
  {
    id: 'jira',
    colorClass: 'cc-jira',
    name: 'Jira',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#0052CC,#2684FF)',
    logo: <SiJirasoftware />,
    description: 'Claude reads your sprint board directly — pulls ticket descriptions, acceptance criteria, and scopes the work into plan.md.',
    tags: ['Sprint Context', 'Ticket → plan.md'],
    detail: {
      title: 'Jira × Claude',
      tagline: 'Tickets in, scoped plan.md out.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Connectors → Jira → OAuth with your Atlassian account. Claude gets read access to your projects and boards.',
          screen: (
            <>
              <span className="cmt">// Settings → Connectors</span><br />
              <span className="acc">▸</span> Jira <span className="br">[Connect]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference a ticket',
          text: 'Paste a ticket key or URL. Claude reads the description, acceptance criteria, comments, and linked issues.',
          screen: (
            <>
              <span className="cmt">// Mention:</span><br />
              <span className="acc">HDFLEET-482</span><br />
              jira.../browse/HDFLEET-482
            </>
          ),
        },
        {
          num: 3,
          title: 'Scope into plan.md',
          text: 'Claude turns acceptance criteria into a plan.md checklist — ready for the Phase 3 research → plan → annotate cycle.',
          screen: (
            <>
              <span className="cmt">// plan.md</span><br />
              <span className="acc">[ ]</span> AC1: validate VIN format<br />
              <span className="acc">[ ]</span> AC2: block duplicate entries
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Read <span className="hl">HDFLEET-482</span> from Jira and turn its acceptance criteria into a plan.md checklist scoped to the inspection form."</> },
        { text: <>"Summarize all open bugs in the <span className="hl">Fleet Tracking</span> board labeled <span className="hl">map</span> and group them by root cause."</> },
        { text: <>"Compare my current branch against <span className="hl">HDFLEET-510</span>'s description — did I miss any acceptance criteria?"</> },
      ],
      useCase: {
        icon: <LuListChecks />,
        title: 'In my workflow',
        text: <>Before Phase 3 starts, I point Claude at the ticket. <strong>Acceptance criteria become the plan.md checklist verbatim</strong> — nothing gets lost between PM and code.</>,
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
          text: 'Claude summarizes the thread, extracts change requests as a checklist, and can draft a reply in your tone.',
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
      },
    },
  },
  {
    id: 'upwork',
    colorClass: 'cc-upwork',
    name: 'Upwork',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#14a800,#6FDA44)',
    logo: <SiUpwork />,
    description: 'Read job postings, client briefs, and active contract messages. Write tailored proposals and extract project requirements — without copy-pasting between tabs.',
    tags: ['Proposals', 'Brief Context'],
    detail: {
      title: 'Upwork × Claude',
      tagline: 'Job brief in. Tailored proposal out. In under 5 minutes.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Settings → Connectors → Upwork → OAuth with your Upwork account. Claude gets read access to job postings and active contracts.',
          screen: (
            <>
              <span className="cmt">// Settings → Connectors</span><br />
              <span className="acc">▸</span> Upwork <span className="br">[Connect]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference a job or contract',
          text: 'Paste a job posting URL or contract ID. Claude reads the full description, requirements, budget range, and client history.',
          screen: (
            <>
              <span className="cmt">// Drop any of:</span><br />
              <span className="acc">upwork.com/jobs/~01...</span><br />
              contract ID or paste text
            </>
          ),
        },
        {
          num: 3,
          title: 'Generate & extract',
          text: 'Claude writes a targeted proposal, extracts client action items from messages, or scopes the project into a deliverable breakdown.',
          screen: (
            <>
              <span className="cmt">// Output:</span><br />
              <span className="acc">proposal.md</span> drafted<br />
              <span className="br">scope + timeline</span>
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Read this Upwork job posting <span className="hl">[URL]</span> and write a tailored proposal highlighting my React Native expertise and DVIR project as a reference."</> },
        { text: <>"Summarize client messages in my active <span className="hl">[Contract Name]</span> contract and extract all pending action items as a checklist."</> },
        { text: <>"Based on this Upwork project brief, create a technical scope with a realistic timeline and deliverable breakdown for a fixed-price bid."</> },
      ],
      useCase: {
        icon: <LuFileText />,
        title: 'In my workflow',
        text: <>Proposals used to take 30 mins each. Claude reads the brief, drafts in under 5 minutes. I review and personalize. <strong>Total time: ~12 minutes. Win rate: up.</strong></>,
      },
    },
  },
  {
    id: 'slack',
    colorClass: 'cc-slack',
    name: 'Slack',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#4A154B,#E01E5A)',
    logo: <SiSlack />,
    description: 'Pull async decisions, blockers, and requirement discussions from channels directly into your planning context. No more scrolling back through 200 messages.',
    tags: ['Thread Context', 'Async Decisions'],
    detail: {
      title: 'Slack × Claude',
      tagline: 'Every async decision is searchable. Stop scrolling, start asking.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Settings → Connectors → Slack → OAuth to your workspace. Claude can read channel messages and search across conversations.',
          screen: (
            <>
              <span className="cmt">// Settings → Connectors</span><br />
              <span className="acc">▸</span> Slack <span className="br">[Connect]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference a channel or thread',
          text: "Mention a channel name, paste a thread link, or describe what you're looking for. Claude searches and surfaces the right context.",
          screen: (
            <>
              <span className="cmt">// Ask about:</span><br />
              #engineering this week<br />
              <span className="acc">thread/...</span> [paste link]
            </>
          ),
        },
        {
          num: 3,
          title: 'Extract & act',
          text: 'Claude summarizes decisions, extracts action items, or drafts a thread update for your team — in plain English.',
          screen: (
            <>
              <span className="cmt">// Output:</span><br />
              <span className="acc">[ ]</span> decisions made<br />
              <span className="acc">[ ]</span> my action items
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Search <span className="hl">#engineering</span> for all messages mentioning the <span className="hl">map clustering refactor</span> this week and summarize what was decided."</> },
        { text: <>"Pull my outstanding action items from <span className="hl">#product</span> and <span className="hl">#mobile-team</span> and create a prioritized task list for today."</> },
        { text: <>"Draft a Slack update for <span className="hl">#mobile-team</span> explaining today's DVIR refactor progress in non-technical terms suitable for a PM audience."</> },
      ],
      useCase: {
        icon: <LuMessageSquare />,
        title: 'In my workflow',
        text: <>Before every standup, I ask Claude to pull my action items from Slack. Shows real blockers in 30 seconds. <strong>No more scrolling through 200 messages to find one decision.</strong></>,
      },
    },
  },
  {
    id: 'monday',
    colorClass: 'cc-monday',
    name: 'Monday.com',
    status: 'Connected',
    logoBg: 'linear-gradient(135deg,#FF3D57,#FA7C3B)',
    logo: <LuLayoutDashboard />,
    description: 'Read board items, deadlines, and statuses. Use project scope from Monday as Phase 1 context and generate standup updates from your actual board data.',
    tags: ['Board Context', 'Standup Prep'],
    detail: {
      title: 'Monday.com × Claude',
      tagline: 'Your board is the source of truth. Let Claude read it.',
      steps: [
        {
          num: 1,
          title: 'Connect',
          text: 'Settings → Connectors → Monday.com → OAuth. Claude gets read access to your boards, items, timelines, and status columns.',
          screen: (
            <>
              <span className="cmt">// Settings → Connectors</span><br />
              <span className="acc">▸</span> Monday.com <span className="br">[Connect]</span>
            </>
          ),
        },
        {
          num: 2,
          title: 'Reference a board or item',
          text: 'Drop a board URL or describe the project. Claude reads statuses, deadlines, assignments, and column values directly.',
          screen: (
            <>
              <span className="cmt">// Drop any of:</span><br />
              monday.com/boards/...<br />
              <span className="acc">or just name the board</span>
            </>
          ),
        },
        {
          num: 3,
          title: 'Plan from real data',
          text: 'Claude generates standup summaries, priority-sorted task lists, or sprint scope estimates from actual board status — not your memory of it.',
          screen: (
            <>
              <span className="cmt">// Output:</span><br />
              <span className="acc">standup.md</span> generated<br />
              <span className="br">3 overdue → triage</span>
            </>
          ),
        },
      ],
      prompts: [
        { text: <>"Read my <span className="hl">[Board Name]</span> in Monday and write today's standup update from the actual status of items assigned to me."</> },
        { text: <>"Pull all overdue items from the <span className="hl">Mobile App Sprint</span> board and generate a priority-sorted plan.md with rough effort estimates."</> },
        { text: <>"Check the timeline in my <span className="hl">Q3 Roadmap</span> board — is the current sprint on track given what's already overdue?"</> },
      ],
      useCase: {
        icon: <LuKanban />,
        title: 'In my workflow',
        text: <>Before Phase 3 scoping, I pull the Monday board. Claude sees <strong>real statuses, not my memory of them.</strong> Estimates become defensible to PM immediately.</>,
      },
    },
  },
];
