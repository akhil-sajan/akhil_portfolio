import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-white dark:from-purple-950/40 dark:via-gray-950 dark:to-gray-950"
      />
      <Container>
        <div className="text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-purple-500 uppercase">
            Hi, I'm Your Name
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
            I build things
            <br />
            for the web.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            A short, punchy tagline about what you do and who you help — replace this with
            your own pitch.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button href="#projects">View my work</Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
