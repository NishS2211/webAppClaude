[//]: # (# AI Dev Workflow)

[//]: # ()
[//]: # (An interactive web presentation documenting a real-world AI-assisted development workflow built with React Native and Claude AI. Covers the full engineering process — from philosophy and trust model through phases, tool integrations, and token efficiency techniques — with animated flow diagrams and detail modals throughout.)

[//]: # ()
[//]: # (**Live:** [https://aiweb-17791.web.app]&#40;https://aiweb-17791.web.app&#41;)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Tech Stack)

[//]: # ()
[//]: # (| Layer | Technology |)

[//]: # (|---|---|)

[//]: # (| UI Framework | React 19 + TypeScript |)

[//]: # (| Build Tool | Vite 8 |)

[//]: # (| Animations | Framer Motion |)

[//]: # (| Flow Diagrams | @xyflow/react &#40;React Flow&#41; |)

[//]: # (| Icons | react-icons &#40;Lucide set&#41; |)

[//]: # (| Styling | CSS Custom Properties + fluid `clamp&#40;&#41;` tokens |)

[//]: # (| Hosting | Firebase Hosting |)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Project Structure)

[//]: # ()
[//]: # (```)

[//]: # (src/)

[//]: # (├── components/)

[//]: # (│   ├── atoms/                  # Smallest reusable units)

[//]: # (│   │   ├── GradText.tsx        # Gradient text span)

[//]: # (│   │   ├── Reveal.tsx          # Scroll-triggered fade-up wrapper)

[//]: # (│   │   └── SectionHeading.tsx  # Eyebrow / SectionTitle / SectionSubtitle)

[//]: # (│   │)

[//]: # (│   ├── molecules/              # Composed UI blocks)

[//]: # (│   │   ├── AgendaCard.tsx      # Hero agenda item cards)

[//]: # (│   │   ├── DetailModal.tsx     # Reusable slide-up modal)

[//]: # (│   │   ├── TokenHero.tsx       # Animated savings bar + circle)

[//]: # (│   │   ├── PhaseVisualFlow.tsx # Step-flow diagram inside phase modals)

[//]: # (│   │   ├── ConnectorStepsFlow.tsx  # Connector prompt flow diagram)

[//]: # (│   │   ├── ProjectDetailPipeline.tsx  # Project pipeline in modal)

[//]: # (│   │   ├── PrincipleCard.tsx   # Philosophy principle cards)

[//]: # (│   │   └── flow/               # React Flow custom nodes & edges)

[//]: # (│   │       ├── AnimatedFlowEdge.tsx   # Bidirectional particle edge)

[//]: # (│   │       ├── ClaudeHubNode.tsx      # Central Claude hub node)

[//]: # (│   │       ├── ConnectorFlowNode.tsx  # App connector node)

[//]: # (│   │       ├── PhaseFlowNode.tsx      # Phase tab node)

[//]: # (│   │       └── ...                    # Other flow nodes)

[//]: # (│   │)

[//]: # (│   └── organisms/              # Full page sections)

[//]: # (│       ├── Nav.tsx             # Sticky nav + dark mode toggle)

[//]: # (│       ├── Hero.tsx            # Landing hero with agenda cards)

[//]: # (│       ├── PhilosophySection.tsx  # Trust chain + principles &#40;02&#41;)

[//]: # (│       ├── TrustChainLayout.tsx   # CSS-based trust chain diagram)

[//]: # (│       ├── PhasesSection.tsx      # 5-phase workflow tabs &#40;03&#41;)

[//]: # (│       ├── ConnectorsSection.tsx  # App ↔ Claude flow canvas &#40;04 — note: section label&#41;)

[//]: # (│       ├── ConnectorsFlowCanvas.tsx  # React Flow hub-and-spoke diagram)

[//]: # (│       ├── TokenSection.tsx       # Token efficiency section &#40;04&#41;)

[//]: # (│       ├── TokenLayout.tsx        # CSS-based technique card grid)

[//]: # (│       ├── ProjectsSection.tsx    # Real project showcases &#40;05&#41;)

[//]: # (│       ├── ClosingSection.tsx     # Engineer's Creed + animated quote)

[//]: # (│       └── Footer.tsx             # Footer with tagline)

[//]: # (│)

[//]: # (├── data/                       # All content and flow graph data)

[//]: # (│   ├── agenda.tsx              # Hero agenda items)

[//]: # (│   ├── phases.ts               # Phase tab definitions)

[//]: # (│   ├── phaseFlowDetails.tsx    # Step content per phase modal)

[//]: # (│   ├── connectors.tsx          # App connector definitions)

[//]: # (│   ├── connectorsFlowLayout.ts # Node/edge positions for connector canvas)

[//]: # (│   ├── tokenTechniques.tsx     # 6 token efficiency techniques)

[//]: # (│   ├── projects.tsx            # Real project case studies)

[//]: # (│   └── ...                     # Other flow layout files)

[//]: # (│)

[//]: # (├── hooks/)

[//]: # (│   ├── useReveal.ts            # IntersectionObserver scroll-reveal hook)

[//]: # (│   ├── useTheme.ts             # Dark / light mode toggle)

[//]: # (│   └── useMediaQuery.ts        # Responsive breakpoint hook)

[//]: # (│)

[//]: # (├── styles/)

[//]: # (│   ├── variables.css           # Design tokens: colors, shadows, fluid type + spacing scale)

[//]: # (│   └── global.css              # Base resets, section, .inner, shared animations)

[//]: # (│)

[//]: # (├── utils/)

[//]: # (│   └── responsive.ts           # JS responsive engine &#40;responsiveFont, spacing, cardWidth…&#41;)

[//]: # (│)

[//]: # (├── types/)

[//]: # (│   └── index.ts                # Shared TypeScript types)

[//]: # (│)

[//]: # (├── App.tsx                     # Root — assembles all sections)

[//]: # (├── main.tsx                    # React entry point)

[//]: # (└── index.css                   # Global CSS imports)

[//]: # (```)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Responsive Design System)

[//]: # ()
[//]: # (All sizing uses a **fluid token engine** rather than static breakpoints. Every pixel value is converted into a `clamp&#40;min, preferred-vw, max&#41;` constraint:)

[//]: # ()
[//]: # (```css)

[//]: # (/* Typography scale — auto-scales between mobile floor and desktop ceiling */)

[//]: # (--fs-hero:    clamp&#40;36px, 5.31vw, 68px&#41;;   /* hero heading */)

[//]: # (--fs-3xl:     clamp&#40;26px, 3.28vw, 42px&#41;;   /* section titles */)

[//]: # (--fs-stat:    clamp&#40;28px, 5.00vw, 64px&#41;;   /* big number stats */)

[//]: # ()
[//]: # (/* Spacing scale */)

[//]: # (--sp-section: clamp&#40;48px, 7.50vw, 96px&#41;;   /* section vertical padding */)

[//]: # (--sp-inset:   clamp&#40;24px, 3.75vw, 48px&#41;;   /* section horizontal padding */)

[//]: # (```)

[//]: # ()
[//]: # (JS utilities in `src/utils/responsive.ts` generate these values programmatically for inline styles:)

[//]: # ()
[//]: # (```ts)

[//]: # (responsiveFont&#40;68&#41;   // → "clamp&#40;37px, 5.31vw, 68px&#41;")

[//]: # (spacing&#40;48&#41;          // → "clamp&#40;20px, 3.75vw, 48px&#41;")

[//]: # (cardWidth&#40;350&#41;       // → "min&#40;100%, 350px&#41;")

[//]: # (```)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Running Locally)

[//]: # ()
[//]: # (**Prerequisites:** Node.js 18+, npm)

[//]: # ()
[//]: # (```bash)

[//]: # (# 1. Clone the repo)

[//]: # (git clone <repo-url>)

[//]: # (cd ai-dev-workflow)

[//]: # ()
[//]: # (# 2. Install dependencies)

[//]: # (npm install)

[//]: # ()
[//]: # (# 3. Start the dev server &#40;hot reload&#41;)

[//]: # (npm run dev)

[//]: # (```)

[//]: # ()
[//]: # (App opens at `http://localhost:5173`)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Building for Production)

[//]: # ()
[//]: # (```bash)

[//]: # (# Type-check + compile + bundle)

[//]: # (npm run build)

[//]: # ()
[//]: # (# Preview the production build locally)

[//]: # (npm run preview)

[//]: # (```)

[//]: # ()
[//]: # (Output goes to `dist/`.)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Deploying to Firebase)

[//]: # ()
[//]: # (```bash)

[//]: # (# Install Firebase CLI &#40;once&#41;)

[//]: # (npm install -g firebase-tools)

[//]: # ()
[//]: # (# Login)

[//]: # (firebase login)

[//]: # ()
[//]: # (# Deploy &#40;dist/ folder is already configured as public&#41;)

[//]: # (npm run build && firebase deploy)

[//]: # (```)

[//]: # ()
[//]: # (**Hosting URL:** [https://aiweb-17791.web.app]&#40;https://aiweb-17791.web.app&#41;)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (## Sections)

[//]: # ()
[//]: # (| # | Section | Description |)

[//]: # (|---|---|---|)

[//]: # (| 01 | **Hero** | Overview, agenda cards, CTA |)

[//]: # (| 02 | **Philosophy** | The Trust Chain — AI → Gate → Production |)

[//]: # (| 03 | **5-Phase Workflow** | Interactive phase tabs with visual step flows |)

[//]: # (| 04 | **Tool Connectors** | Bidirectional hub-and-spoke: apps ↔ Claude |)

[//]: # (| 04 | **Token Efficiency** | 6 techniques with animated savings layout |)

[//]: # (| 05 | **Real Projects** | Case studies: FleetView, Decor AI, EPP, Dashboard |)

[//]: # (| 05 | **Engineer's Creed** | Closing manifesto with word-by-word animation |)

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (*AI-assisted · Engineer-reviewed · Human-owned*)
