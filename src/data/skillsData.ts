import type { IconType } from 'react-icons';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiPython } from 'react-icons/si';

interface Skill {
    name: string;
    icon: IconType;
    category: 'Frontend' | 'Backend' | 'Data & Tools';
}

export const skills: Skill[] = [
    { name: 'React', icon: SiReact, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
    { name: 'Express', icon: SiExpress, category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Backend' },
    { name: 'Python', icon: SiPython, category: 'Data & Tools' },
];