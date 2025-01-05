import { Shield, Database, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'OSINT Framework',
    description: 'Advanced OSINT tool for automated information gathering and analysis',
    icon: Search,
    tech: ['Python', 'APIs', 'Shell Scripting'],
    github: 'https://github.com/satvik-vs/osint-framework',
    demo: 'https://sih.satvik.live',
  },
  {
    title: 'Pentest Automation',
    description: 'Automated penetration testing toolkit for web applications',
    icon: Shield,
    tech: ['Python', 'Docker', 'Web Security' , 'Javascript'],
    github: '#',
  },
  {
    title: 'DorkDog',
    description: 'An Advanced Search Enginer For Hackers [ In Development Stage ]',
    icon: Search,
    tech: ['React', 'Dorks', 'Python'],
    github: 'https://github.com/satvikblog/dorkdog',
    demo: 'https://dorkdog.satvik.live',
  },
  
];