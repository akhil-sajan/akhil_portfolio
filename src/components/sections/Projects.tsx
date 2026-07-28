import { monoPlaceholder } from '../../lib/placeholder';
import { projects } from '../../data/projects';
import { TiltCard } from '../unlumen-ui/tilt-card';
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
        <div className="flex flex-col gap-8">
          {projects.slice(0, 2).map((project, i) => (
            <TiltCard
              key={project.id}
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
          ))}
        </div>
      </Container>
    </section>
  );
}
