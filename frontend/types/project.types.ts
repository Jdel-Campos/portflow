export interface Project {
    _id: string;
    title: string;
    description: string;
    tags: string[];
    overview: string;
    reflections: string[];
    challenge: string;
    lineRationale: string;
    tools: string[];
    links?: {
        github?: string;
        vercel?: string;
        behance?: string;
        dribbble?: string;
    };
    images?: string[];
    videos?: string[];
    createdAt: string;
    updateAt: string;
}