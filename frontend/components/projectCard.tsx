import { Project } from "@/types/project.types"

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectCard ({ projects }: ProjectListProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{projects.title}</h2>
            <p className="text-gray-600">{projects.description}</p>
        </div>
    );
};