import { type FormEvent, useState } from 'react';
import { socials } from '../../data/socials';
import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';

const CONTACT_EMAIL = 'you@example.com';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <Container>
        <TwoToneHeading
          top="Let's Work"
          bottom="Together"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg text-black placeholder:text-gray-400 focus:outline-none dark:border-white/10 dark:bg-[var(--color-surface)] dark:text-white dark:placeholder:text-gray-500"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg text-black placeholder:text-gray-400 focus:outline-none dark:border-white/10 dark:bg-[var(--color-surface)] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg text-black placeholder:text-gray-400 focus:outline-none dark:border-white/10 dark:bg-[var(--color-surface)] dark:text-white dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--color-accent)] px-6 py-3 text-lg font-bold text-[var(--color-accent-foreground)] uppercase tracking-wide transition-colors hover:brightness-110"
          >
            Send message
          </button>
        </form>

        <div className="mt-8 flex gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
