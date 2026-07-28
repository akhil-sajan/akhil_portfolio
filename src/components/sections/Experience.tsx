import { experience } from '../../data/experience';
import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <Container>
        <TwoToneHeading top={`${experience.length}+ Years Of`} bottom="Experience" />
        <div className="divide-y divide-gray-200 border-t border-gray-200 dark:divide-white/10 dark:border-white/10">
          {experience.map((entry) => (
            <div
              key={`${entry.role}-${entry.company}`}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="text-2xl font-bold text-black dark:text-white">{entry.role}</p>
                <p className="text-lg text-gray-500 dark:text-gray-500">{entry.company}</p>
                <p className="mt-2 max-w-xl text-lg text-gray-600 dark:text-gray-400">
                  {entry.description}
                </p>
              </div>
              <p className="text-lg whitespace-nowrap text-gray-500 dark:text-gray-500">
                {entry.period}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
