import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white dark:from-gray-900 dark:via-black dark:to-black"
      />
      <Container>
        <div className="relative z-10 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-gray-500 uppercase dark:text-gray-400">
            Hi, I'm Your Name
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-black sm:text-7xl dark:text-white">
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
