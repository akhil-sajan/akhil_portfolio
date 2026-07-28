import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface TechStackEntry {
  name: string;
  subtitle: string;
  icon: IconType;
  color: string;
}

export const techStack: TechStackEntry[] = [
  { name: 'HTML5', subtitle: 'Markup Language', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', subtitle: 'Stylesheet Language', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', subtitle: 'Programming Language', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', subtitle: 'Typed JavaScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', subtitle: 'UI Library', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', subtitle: 'Runtime Environment', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', subtitle: 'Web Framework', icon: SiExpress, color: '#6b7280' },
  { name: 'MySQL', subtitle: 'Relational Database', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', subtitle: 'NoSQL Database', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', subtitle: 'Containerization', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', subtitle: 'Version Control', icon: SiGit, color: '#F05032' },
];
