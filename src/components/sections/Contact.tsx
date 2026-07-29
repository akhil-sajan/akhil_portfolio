import { type FormEvent, useState } from 'react';
import { Container } from '../ui/Container';
import { TwoToneHeading } from '../ui/TwoToneHeading';

const WEB3FORMS_ACCESS_KEY = 'b66d9fab-2fb3-4686-8778-8e0fbecf7f67';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
            disabled={status === 'sending'}
            className="w-full rounded-xl bg-[var(--color-accent)] px-6 py-3 text-lg font-bold text-[var(--color-accent-foreground)] uppercase tracking-wide transition-colors hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-sm font-medium text-green-600 dark:text-green-500">
              Thanks! Your message has been sent — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600 dark:text-red-500">
              Something went wrong sending your message. Please try again.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
