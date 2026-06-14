import { Nav } from './components/organisms/Nav';
import { Hero } from './components/organisms/Hero';
import { PhilosophySection } from './components/organisms/PhilosophySection';
import { PhasesSection } from './components/organisms/PhasesSection';
import { ConnectorsSection } from './components/organisms/ConnectorsSection';
import { TokenSection } from './components/organisms/TokenSection';
import { ProjectsSection } from './components/organisms/ProjectsSection';
import { ClosingSection } from './components/organisms/ClosingSection';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <PhilosophySection />
      <PhasesSection />
      <ConnectorsSection />
      <TokenSection />
      <ProjectsSection />
      <ClosingSection />
      <Footer />
    </>
  );
}

export default App;