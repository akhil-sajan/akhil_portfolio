export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface TechStackItem {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
