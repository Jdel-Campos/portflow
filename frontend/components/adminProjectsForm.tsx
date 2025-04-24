"use client";

import { Project } from "@/types/project.type";
import ProjectCard from "./projectCard";

interface ProjectProps {
    projects: Project[]
};

export default function AdminProjectList({ projects }: ProjectProps) {
    if(projects.length === 0) {
        return <div className="text-center py-8"> Nenhum projeto encontrado!!!!  </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard key={project._id} projects={project} />
            ))}
        </div>
    );
};