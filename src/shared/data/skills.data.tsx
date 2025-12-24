import {ComponentType, CSSProperties} from 'react';
import {SiCss3, SiHtml5, SiJavascript, SiLaravel, SiNestjs, SiNextdotjs, SiPhp, SiReact} from 'react-icons/si';

interface Skill {
  name: string;
  icon: ComponentType<{
    className?: string;
    style?: CSSProperties;
  }>;
  iconColor: string;
  level: number;
  levelColor: string;
}

const skillsData: Skill[] = [
  {
    name: 'HTML',
    icon: SiHtml5,
    iconColor: '#E5532D',
    levelColor: '#E5532D',
    level: 10,
  },
  {
    name: 'CSS',
    icon: SiCss3,
    iconColor: '#1B75B8',
    levelColor: '#1B75B8',
    level: 10,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    iconColor: '#F7E025',
    levelColor: '#F7E025',
    level: 10,
  },
  {
    name: 'React',
    icon: SiReact,
    iconColor: '#00FFFF',
    levelColor: '#00FFFF',
    level: 9,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    iconColor: '#FFFFFF',
    levelColor: '#080808',
    level: 9,
  },
  {
    name: 'Nest',
    icon: SiNestjs,
    iconColor: '#E0234E',
    levelColor: '#E0234E',
    level: 7,
  },
  {
    name: 'PHP',
    icon: SiPhp,
    iconColor: '#556096',
    levelColor: '#556096',
    level: 8,
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    iconColor: '#FD5542',
    levelColor: '#FD5542',
    level: 7,
  },
];

export default skillsData;
