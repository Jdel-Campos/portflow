"use client"

import { useEffect, useState } from "react";
import { getPeojects } from "@/services/project";
import { Project } from "@/types/project.types";
import { toast } from "react-toastify";
import ProjectList from "@/components/projectList";

export default function AdminPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterProjects, setFilterProjects] = useState<Project[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchProjects () {
            try {
                const data = await getPeojects();
                setProjects(data);
                setFilterProjects(data);
            } catch (error) {
                console.error("Erro ao buscar pelo projeto:", error);
            } finally{
                setLoading(false);
            };
        };
        fetchProjects();
    }, []);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const lowerCaseSearch = searchTerm.toLowerCase();
            const filtered = projects.filter(
                (project) =>
                    project.title.toLowerCase().includes(lowerCaseSearch) ||
                    project.description.toLowerCase().includes(lowerCaseSearch)
            );
            setFilterProjects(filtered);
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, projects]);

    return (
        <div className="p-4">
            <header className="bg-gray-200 text-gray-900 h-24 flex">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2x1 font-bold"> Manage Portfolio Projects </h1>
                    <div>
                        <button> New Project </button>
                    </div>
                    <div className="mt-4 relative">
                        <input 
                            type="text"
                            placeholder="Search projects ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-1/2 p-2 pl-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                            fill="none"
                            stroke="currentCollor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6ms-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                    </div>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                {loading ? (
                    <div className="text-center py-8"> Loading Projects </div>
                ) : (
                    <ProjectList projects={filterProjects} />
                )}
            </main>
        </div>
    );
};