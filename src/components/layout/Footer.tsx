import { socials } from '../../data/socials';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Akhil Sajan. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-[var(--color-accent)] dark:text-gray-400 dark:hover:text-[var(--color-accent)]"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
