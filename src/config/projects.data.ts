import { Shield, Database, Search, EarthIcon, DogIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'OSINT Framework',
    description: "Advanced OSINT tool for automated information gathering and analysis using tools & Techniques like : NMAP , theHavester , whois , Subdomain Enumeration , DNS Enumeration , WAFw00f ",
    icon: Shield,
    tech: ['Python', 'APIs', 'Shell Scripting','NMAP'],
    github: 'https://github.com/satvik-vs/osint-framework',
    demo: 'https://sih.satvik.live',
  },
  {
    title: 'DorkDog',
    description: "An Advanced Search Enginer For Hackers leverages the advantage of Google Dorking and API's",
    icon: DogIcon,
    tech: ['Dorks','Shell Scripting', 'Python','TypeScript', 'HTML &CSS' , 'React JS'],
    github: 'https://github.com/satvikblog/dorkdog',
    demo: 'https://dorkdog.satvik.live',
  },
  {
    title:'HackOps Portal',
    description:'HackOps Event and Task Management Platform: A React-based web application for the HackOps Club, featuring event registration, task submission with image uploads, and an admin dashboard, powered by Supabase for secure data management and enhanced with responsive Tailwind CSS design.',
    icon:Search,
    tech:['React JS ', 'HTML& CSS' , 'PostgreSQL' , 'GIT ', 'AWS AMPLIFY','TypeScript'],
    github:'#',
    demo: 'https://hackopsgitam.live',
  },
  {
    title: 'PenTest Town',
    description: 'Ad advnaced cybersecurity Learning Platform proving interactive cybersecurity roadmaps and skills',
    icon:EarthIcon,
    tech:['React JS , HTML , CSS , PostgreSQL , GIT , AWS AMPLIFY','TypeScript'],
    github:'https://github.com/satvik-vs/pentesttown',
    demo:'https://nerchuko.satvik.live'
  }
  
];