import type { ReactNode } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import avatarPhoto from '../../assets/avatar.png';
import { socials } from '../../data/socials';

const SOCIAL_ICONS: Record<string, ReactNode> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Email: <FaEnvelope />,
};

export function ProfileCard({ className = '' }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-xs ${className}`}>
      <div className="overflow-hidden rounded-[2rem] bg-[var(--color-accent)] shadow-sm dark:shadow-none">
        <div className="px-6 pt-6">
          <img
            src={avatarPhoto}
            alt="Akhil Sajan"
            className="aspect-[4/5] w-full rounded-t-2xl rounded-b-full object-cover"
          />
        </div>
        <div className="px-6 pt-6 pb-7 text-center">
          <p className="text-2xl font-bold text-[var(--color-accent-foreground)]">Akhil Sajan</p>

          <p className="mt-4 text-sm text-gray-500">
Half debugging code, half debugging my sleep schedule, building things worth shipping either way.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            {socials.map((social) => {
              const isEmail = social.label === 'Email';
              return (
                <a
                  key={social.label}
                  href={isEmail ? '#contact' : social.url}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  className="text-2xl text-gray-400 transition-colors hover:text-[var(--color-accent-foreground)]"
                >
                  {SOCIAL_ICONS[social.label] ?? <FaEnvelope />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
