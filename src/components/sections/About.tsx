import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading eyebrow="About Me" title="Who I am" />
        <div className="mx-auto max-w-2xl text-center text-gray-600 dark:text-gray-400">
          <p>
            Write a couple of paragraphs here about your background, what got you into
            development, and what you're passionate about building. Mention your experience,
            values, and what makes you tick as an engineer.
          </p>
          <p className="mt-4">
            You can also add a second paragraph about your current focus, interests outside of
            work, or what you're looking for next.
          </p>
        </div>
      </Container>
    </section>
  );
}
