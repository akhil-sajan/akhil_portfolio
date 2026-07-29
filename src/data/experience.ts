export interface ExperienceEntry {
  role: string;
  company: string;
  highlights: string[];
  period: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    company: 'Wipro Technologies',
    highlights: [
      'Took on technical frontend and backend tasks (JavaScript, TypeScript, Node.js, Express.js, React.js) to support day-to-day engineering operations',
      'Supported automation and integration projects, building REST APIs and automation flows to optimize internal data processes and system integration',
      'Collaborated with product managers and cross-functional teams to identify and implement technical process improvements',
    ],
    period: 'Apr 2022 — Dec 2024',
  },
];
