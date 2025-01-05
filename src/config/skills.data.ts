import { Shield, Code, Network, Terminal, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
}

export const skills: Skill[] = [
  {
    name: 'Penetration Testing',
    icon: Shield,
    level: 90,
  },
  {
    name: 'Python Development',
    icon: Code,
    level: 85,
  },
  {
    name: 'Network Security',
    icon: Network,
    level: 88,
  },
  {
    name: 'Linux Administration',
    icon: Terminal,
    level: 92,
  },
  {
    name: 'SOC & SIEM',
    icon: Database,
    level: 92,
  },
  {
    name: 'Threat Intelligence and Vulnerability Analysis',
    icon: Shield,
    level: 92,
  },
];