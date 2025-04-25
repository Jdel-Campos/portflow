"use client";

import { Project } from "@/types/project.types";
import ProjectCard from "./projectCard";

interface ProjectProps {
    project: Project[]
};

export default function AdminProjectList({ project }: ProjectProps) {
    if(project.length === 0) {
        return <div className="text-center py-8"> Nenhum projeto encontrado!!!!  </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.map((project) => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </div>
    );
};