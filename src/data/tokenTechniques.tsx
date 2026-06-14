import { LuFileText, LuCrosshair, LuRefreshCw, LuZap, LuPlug, LuUndo2 } from 'react-icons/lu';
import type { TokenTechnique } from '../types';
import { TipList, ComparisonBoxes } from '../components/molecules/TokenTechParts';

export const tokenTechniques: TokenTechnique[] = [
  {
    id: '1',
    colorClass: 'tc-1',
    icon: <LuFileText />,
    name: 'Persistent plan.md / README.md',
    saving: '↓ Saves context-reloading tokens every session',
    description: 'Write your architecture and constraints into a persistent file once. Every new session restores context from the file — not from chat history.',
    detail: (
      <TipList
        tips={[
          <>Keep <code>plan.md</code> as the single source of truth per feature. When context compresses, Claude re-reads the file — not the chat.</>,
          'After every session, ask Claude to update plan.md with what was completed. Next session resumes instantly.',
          <>Point new sessions at the file first: <code>"Read plan.md and README.md before anything else."</code></>,
        ]}
      />
    ),
  },
  {
    id: '2',
    colorClass: 'tc-2',
    icon: <LuCrosshair />,
    name: 'Surgical prompts beat broad ones',
    saving: '↓ Cuts correction cycles by 50%',
    description: 'Vague prompts produce vague output, which needs corrections, which costs tokens. Precise inputs = first-time-right outputs.',
    detail: (
      <>
        <ComparisonBoxes
          bad={<><span className="cmt">// vague = big response + fixes</span><br />"Make MapScreen look better"</>}
          good={<><span className="cmt">// precise = one-shot</span><br />"VehicleMarker opacity 0.85<br />on cluster, line 47"</>}
        />
        <TipList
          tips={[
            'Single-sentence corrections during implementation. Long corrections breed long responses.',
            'For UI fixes: attach a screenshot. One image saves ~200 tokens of description and is far more accurate.',
          ]}
        />
      </>
    ),
  },
  {
    id: '3',
    colorClass: 'tc-3',
    icon: <LuRefreshCw />,
    name: 'Reuse & extend diagrams — never regenerate',
    saving: '↓ Saves 500+ tokens per diagram update',
    description: 'Flow diagrams in Mermaid.js or SVG are cheap to extend, expensive to regenerate. Always paste existing code and describe the delta.',
    detail: (
      <>
        <ComparisonBoxes
          bad={<><span className="cmt">// regenerate from scratch</span><br />"Make a diagram with<br />research, plan, annotate,<br />implement, and a loop..."</>}
          good={<><span className="cmt">// extend existing</span><br />"Add Validation Gate<br />node after Phase 3<br />in this code: [paste]"</>}
        />
        <TipList
          tips={[
            <>Use <strong>Mermaid.js</strong> — Claude generates it in ~200 tokens vs 800+ for raw SVG.</>,
            <>Save your diagram source. Treat changes as diffs: <code>"Change the arrow from solid to dashed"</code> = 20 tokens.</>,
            'Use the Figma MCP connector — diagrams generated in FigJam are reusable across docs without regeneration.',
          ]}
        />
      </>
    ),
  },
  {
    id: '4',
    colorClass: 'tc-4',
    icon: <LuZap />,
    name: 'Single-session strategy',
    saving: '↓ ~40% fewer total tokens vs multi-session',
    description: 'Research, planning, annotation, and implementation in one long session. Context built once is free to reuse. Rebuilding it costs you twice.',
    detail: (
      <TipList
        tips={[
          "Don't split planning and implementation across sessions if you can avoid it. The model's codebase understanding is your most valuable free resource.",
          'If you must start fresh: point Claude at plan.md and README.md first. These are your token-efficient context restorers.',
          'For huge tasks: split by feature, not by session. One feature = one session, end to end.',
        ]}
      />
    ),
  },
  {
    id: '5',
    colorClass: 'tc-5',
    icon: <LuPlug />,
    name: 'Lean on connectors for context',
    saving: '↓ Cuts copy-paste tokens to zero',
    description: 'Instead of pasting PRDs, API specs, or email threads into chat — let Claude pull them directly from Drive, Postman, or Gmail.',
    detail: (
      <TipList
        tips={[
          'PRD copy-paste = 2,000+ tokens. Drive link = ~10 tokens. Same context.',
          'API specs from Postman are streamed in only when needed — not as one big upfront dump.',
          'Connectors also reduce error rate — no risk of pasting an outdated version of the doc.',
        ]}
      />
    ),
  },
  {
    id: '6',
    colorClass: 'tc-1',
    icon: <LuUndo2 />,
    name: 'Revert > patch a bad foundation',
    saving: '↓ Saves entire correction sessions',
    description: 'When implementation goes wrong, every patch costs more than the last. Discard the git diff. Re-scope with tighter constraints. Start clean.',
    detail: (
      <TipList
        tips={[
          "Each patch = read + reason + edit + verify. That's 4 token-spend rounds vs 1 clean restart.",
          <>If you've patched 3+ times in a row, that's your signal: <code>git reset --hard</code> and re-scope.</>,
          "Add the rejected output's mistakes to plan.md as anti-patterns — Claude won't repeat them.",
        ]}
      />
    ),
  },
];