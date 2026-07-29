import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <Container>
        <TwoToneHeading
          top="Recent"
          bottom="Projects"
          description="A few things I've built recently."
        />
        <p className="text-2xl font-bold text-gray-400 dark:text-gray-600">Coming soon</p>
      </Container>
    </section>
  );
}
