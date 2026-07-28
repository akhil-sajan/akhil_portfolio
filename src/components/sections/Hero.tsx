import { heroStats } from '../../data/hero';
import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';
import { ProfileCard } from './ProfileCard';

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-16 overflow-hidden"
    >
      <Container>
        <ProfileCard className="mb-12 md:hidden" />

        <div>
          <TwoToneHeading
            top="Software"
            bottom="Engineer"
            description="Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
          />

          <div className="mt-10 flex flex-wrap gap-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-black text-black sm:text-6xl dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm leading-tight whitespace-pre-line text-gray-500 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
