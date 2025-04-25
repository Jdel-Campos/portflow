import { Project } from "@/types/project.types"

interface ProjectListProps {
    project: Project;
}

export default function ProjectCard ({ project }: ProjectListProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
        </div>
    );
};