import { Dock, type DockItem } from '../unlumen-ui/dock';

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const NAV_ITEMS: DockItem[] = [
  { icon: <HomeIcon />, label: 'Home', href: '#top' },
  { icon: <UserIcon />, label: 'About', href: '#about' },
  { icon: <GridIcon />, label: 'Projects', href: '#projects' },
  { icon: <BriefcaseIcon />, label: 'Experience', href: '#experience' },
  { icon: <CodeIcon />, label: 'Tech Stack', href: '#tech-stack' },
  { icon: <MailIcon />, label: 'Contact', href: '#contact' },
];

export function SiteDock() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Dock items={NAV_ITEMS} borderRadius={28} iconSize={36} gap={8} magnification={1.8} />
    </div>
  );
}
