import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors';
  const variants = {
    primary: 'bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:brightness-110',
    secondary:
      'border border-gray-300 text-black hover:bg-gray-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5',
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
