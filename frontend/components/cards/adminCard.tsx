import { Project } from "@/types/project.types";

interface ProjectListProps {
  project: Project;
}
/* bg-white shadow-lg rounded-lg p-4 w-[350px] h-[517px] overflow-hidden flex flex-col relative */
export default function AdminCard({ project }: ProjectListProps) {
  return (
    <div className="bg-white bordershadow-lg rounded-lg p-4 w-[300px] h-[500px] overflow-hidden flex flex-col justify-between relative">
      {/* Título Fixo no Lado Direito (em destaque) */}
      <div className="absolute top-0 right-0 bg-green-300 text-gray-900 px-3 py-1 rounded-tl-0 rounded-tr-[9px] rounded-br-0 rounded-bl-[10px] text-sm font-medium">
        {project.tags}
      </div>
      <div></div>

      {/* Subtítulo à Esquerda */}
      <div className="pt-5">
        <h3 className="text-lg text-center font-medium text-gray-600">
          {project.title}
        </h3>
      </div>

      {/* Área da Imagem (Placeholder) */}
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Image Placeholder</span>
      </div>

      {/* Descrição */}
      <p className="text-xs text-gray-500 mb-4 line-clamp-10">
        {/*         {project.description}  */}
        In the minimalist, I sought to create a simple and minimal work,
        conveying my style and level of work. I avoided visual overload by
        keeping a clean approach. I’ve directed technical details to specific
        pages, serving both those interested in detailed information and those
        wanting an overview.
      </p>

      {/* Botões */}
      <div className="flex justify-between space-x-2">
        <button className="bg-green-100 text-green-700 w-[150px] h-[32px] px-4 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition flex items-center">
          <span className="mr-1">Edit</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L15.232 5.232z"
            />
          </svg>
        </button>
        <button className="bg-red-100 text-red-700 w-[100px] h-[32px] px-4 py-1 rounded-full text-sm font-medium hover:bg-red-200 transition">
          Delete
        </button>
      </div>
    </div>
  );
}
