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
            description="I'm a software engineer who enjoys building things end-to-end — from designing clean architecture to shipping features that actually work in production. I care about writing maintainable code, solving real problems, and constantly learning new tools and approaches along the way."
          />
        </div>
      </Container>
    </section>
  );
}
