export interface Project {
    id: number;
    title: string;
    description: string;
    impact: string;
    tags: string[];
    link: string | null;
    live: boolean;
    github: string;
    image: string;
}