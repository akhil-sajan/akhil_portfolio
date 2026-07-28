import { Footer } from './components/layout/Footer';
import { SiteDock } from './components/layout/SiteDock';
import { SiteThemeToggle } from './components/layout/SiteThemeToggle';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { ProfileCard } from './components/sections/ProfileCard';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
      <div className="mx-auto max-w-6xl px-6 md:flex md:gap-12">
        <aside className="hidden shrink-0 md:sticky md:top-0 md:flex md:h-svh md:w-[21rem] md:items-start md:justify-center md:pt-20">
          <ProfileCard />
        </aside>
        <div className="min-w-0 flex-1">
          <main className="space-y-24 py-20 sm:space-y-32">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <TechStack />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <SiteDock />
      <SiteThemeToggle />
    </div>
  );
}

export default App;
