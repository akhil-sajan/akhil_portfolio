import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 dark:border-white/10">
      <Container>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Akhil Sajan. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
