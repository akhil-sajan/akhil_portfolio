import { techStack } from '../../data/techStack';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="flex min-h-[calc(100svh-4rem)] items-center bg-gray-50 dark:bg-gray-900/50"
    >
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack"
          description="Tools and technologies I use regularly."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
