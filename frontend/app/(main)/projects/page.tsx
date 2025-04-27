"use client"

import ProjectList from "@/components/projectList";

export default function ProjectPage() {
    return(
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold"> Meus Projetos </h1>
                    <p className="mt-2 text-lg"> Explore os projetos que desenvolvi! </p>
                </div>
            </header>
            <main className="flex container mx-auto px-4 py-8 gap-8 items-start">
                <div className="flex-1">
                    <ProjectList projects={[]} />
                </div>
            </main>
        </div>
    );
};