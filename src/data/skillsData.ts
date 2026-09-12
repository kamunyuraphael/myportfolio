import type { IconType } from 'react-icons';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiPython } from 'react-icons/si';
import { FaAws, FaMicrochip, FaBrain, FaChartBar } from 'react-icons/fa';

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
    { name: 'AWS Cloud', icon: FaAws, category: 'Data & Tools' },
    { name: 'AIoT', icon: FaMicrochip, category: 'Data & Tools' },
    { name: 'Data Analysis', icon: FaChartBar, category: 'Data & Tools' },
    { name: 'ML/AI', icon: FaBrain, category: 'Data & Tools' },
];