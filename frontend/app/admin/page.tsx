"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/projects";
import { Project } from "@/types/project.types";
import ProjectList from "@/components/projectList";
import ProjectSidebar from "@/components/projectSidebar";
import HeaderAdmin from "@/components/admin/headerAdmin";
import GeneralFooter from "@/components/generalFooter";

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterProjects, setFilterProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
        setFilterProjects(data);
      } catch (error) {
        setError("Erro ao carregar projetos. Tente novamente.");
        console.error("Erro ao buscar pelo projeto:", error);
      } finally {
        setLoading(false);
      }
    }

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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] grid-rows-[auto_1fr_auto]">
      {/* Sidebar */}
      <aside className="bg-gray-200 p-4 md:sticky md:top-0 md:h-screen">
        <ProjectSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow">
          <HeaderAdmin
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onNewProject={() => alert("Navegar para criação de projeto")}
          />
        </header>

        {/* Main */}
        <main className="p-6 flex-1">
          {loading && <p>Carregando...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && <ProjectList projects={filterProjects} />}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 p-4">
          <GeneralFooter />
        </footer>
      </div>
    </div>
  );
}