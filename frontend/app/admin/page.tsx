"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/projects";
import { Project } from "@/types/project.types";
import ProjectList from "@/components/projectList";
import HeaderAdmin from "@/components/admin/headerAdmin";
import GeneralFooter from "@/components/generalFooter";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
    <>
      <div>
        <div className="flex flex-col">
          <header className="sticky top-0 z-10 bg-white shadow">
            <HeaderAdmin />
          </header>

          <main className="p-6 flex-1">
            {loading && <p>Carregando...</p>}
            {error && (
              <div className="flex justify-center items-center flex-col min-h-[85vh]">
                <DotLottieReact
                  src="https://lottie.host/657f01c8-94c8-413a-9282-a0f38e263bb0/kikUFmWh08.lottie"
                  loop
                  autoplay
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
            )}
            {!loading && !error && <ProjectList projects={filterProjects} />}
          </main>

          {/* Footer */}
        </div>
      </div>
      <footer>
        <GeneralFooter />
      </footer>
    </>
  );
}
