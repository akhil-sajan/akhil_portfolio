import { techStack } from '../../data/techStack';
import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';

export function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-16">
      <Container>
        <TwoToneHeading
          top="Tech"
          bottom="Stack"
          description="Tools and technologies I use regularly."
        />
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gray-200 bg-white dark:border-transparent">
                  <Icon className="h-8 w-8" style={{ color: tech.color }} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-black dark:text-white">{tech.name}</p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">{tech.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
