import AdminCard from "./cards/adminCard";
import { Project } from "@/types/project.types";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    if (projects.length === 0) {
        return (
            <div className="flex justify-center items-center flex-col min-h-[70vh]">
                <DotLottieReact
                    src="https://lottie.host/657f01c8-94c8-413a-9282-a0f38e263bb0/kikUFmWh08.lottie"
                    loop
                    autoplay
                    style={{ width: "70%", height: "70%" }}
                />
            </div>
        );
    };

    return (
        <div className="flex justify-center min-h-[70vh] p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl">
                {projects.map((project) => (
                    <AdminCard key={project._id} project={project}/>
                ))}
            </div>
        </div>
    );
};