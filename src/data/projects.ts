import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    description:
      'A short description of this project — what it does and the problem it solves.',
    tags: ['React', 'TypeScript'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'A short description of this project — what it does and the problem it solves.',
    tags: ['Node.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description:
      'A short description of this project — what it does and the problem it solves.',
    tags: ['React', 'Tailwind CSS'],
    repoUrl: '#',
  },
];
