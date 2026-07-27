import { CursorImageTrail } from './components/unlumen-ui/cursor-image-trail';
import { ThemeToggleButton } from './components/ui/skiper-ui/skiper26';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { SiteDock } from './components/layout/SiteDock';
import { trailItems } from './data/trailItems';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <CursorImageTrail
        items={trailItems}
        itemSize={40}
        itemLifespan={250}
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SiteDock />
      <div className="fixed right-6 bottom-6 z-50">
        <ThemeToggleButton />
      </div>
    </div>
  );
}

export default App;
