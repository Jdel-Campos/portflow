import { Project } from "@/types/project.types"
import Image from "next/image";

interface ProjectListProps {
    project: Project;
}

export default function MainCard ({ project }: ProjectListProps) {
    return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto my-4">
      {/* Seção da Imagem */}
        <div className="w-1/3">
            <Image
            src="/path-to-your-image.jpg" // Substitua pelo caminho da sua imagem
            alt="Profile"
            width={100}
            height={100}
            className="rounded-lg object-cover"
            />
        </div>

        {/* Seção de Texto e Botões */}
        <div className="w-2/3 pl-4 flex flex-col justify-between">
            <div>
            <h2 className="text-lg font-semibold text-gray-800">
                Project Full Stack
            </h2>
            <h3 className="text-sm font-medium text-gray-600">My Portfolio</h3>
            <p className="text-xs text-gray-500 mt-1">
                In the minimalist, I sought to create a simple and minimal work,
                conveying my style and level of work...
            </p>
            </div>

            {/* Botões */}
            <div className="flex space-x-2 mt-4">
            <button className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">
                Edit
            </button>
            <button className="bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-red-200 transition">
                Delete
            </button>
            </div>
        </div>
        </div>
    );
};