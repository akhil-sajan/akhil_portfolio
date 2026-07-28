export interface ExperienceEntry {
  role: string;
  company: string;
  description: string;
  period: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Your Current Company',
    description: 'Placeholder — describe your role, the team, and what you shipped here.',
    period: '2025 — Present',
  },
  {
    role: 'Frontend Developer',
    company: 'Previous Company',
    description: 'Placeholder — describe your role, the team, and what you shipped here.',
    period: '2023 — 2025',
  },
  {
    role: 'Junior Developer',
    company: 'First Company',
    description: 'Placeholder — describe your role, the team, and what you shipped here.',
    period: '2022 — 2023',
  },
];
