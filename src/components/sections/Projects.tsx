import { monoPlaceholder } from '../../lib/placeholder';
import { projects } from '../../data/projects';
import { TiltCard } from '../unlumen-ui/tilt-card';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="flex min-h-[calc(100svh-4rem)] items-center">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projects"
          description="A few things I've built recently."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => {
            const isLastOdd = projects.length % 2 !== 0 && i === projects.length - 1;
            return (
              <div key={project.id} className={isLastOdd ? 'lg:col-span-2' : undefined}>
                <TiltCard
                  title={project.title}
                  description={project.description}
                  imageSrc={monoPlaceholder(project.tags[0] ?? '', i % 2 === 1)}
                  imageAlt={`${project.title} preview placeholder`}
                  href={project.liveUrl ?? project.repoUrl}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
