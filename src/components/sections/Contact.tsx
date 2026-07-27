import { socials } from '../../data/socials';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />
        <div className="flex flex-col items-center gap-6">
          <Button href="mailto:you@example.com">Say hello</Button>
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
