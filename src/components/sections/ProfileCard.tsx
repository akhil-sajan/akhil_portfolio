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
      <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm dark:border-transparent dark:shadow-none">
        <div className="px-6 pt-6">
          <img
            src={avatarPhoto}
            alt="Akhil Sajan"
            className="aspect-[4/5] w-full rounded-t-2xl rounded-b-full object-cover"
          />
        </div>
        <div className="px-6 pt-6 pb-7 text-center">
          <p className="text-2xl font-bold text-black">Akhil Sajan</p>

          <p className="mt-4 text-sm text-gray-500">
            A Software Engineer who has developed countless innovative solutions.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-black text-black transition-colors hover:bg-black hover:text-white"
              >
                {SOCIAL_ICONS[social.label] ?? <FaEnvelope />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
