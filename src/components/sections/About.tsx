import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <Container>
        <TwoToneHeading top="Who I" bottom="Am" />
        <div className="max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
          <p>
            An M.Sc. student in Global Software Development at Hochschule Fulda, currently based
            in Germany. I'm a full-stack developer with a love for building clean, scalable web
            applications.
          </p>
          <p className="mt-4">
            Outside of code, you'll find me at the gym, watching or playing football, exploring
            new music, or catching up on anime.
          </p>
        </div>
      </Container>
    </section>
  );
}
