import { useState } from "react";
import { Project } from "@/types/project.types";

interface AdminProjectFormProps {
  project?: Project;
  onSubmit: (project: Omit<Project, "_id" | "createdAt" | "updatedAt">) => void;
}

export default function AdminProjectForm({
  project,
  onSubmit,
}: AdminProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    tags: project?.tags || [],
    images: project?.images || [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setFormData({ ...formData, tags });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Título
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-2"
        >
          Descrição
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-2 border rounded"
          rows={4}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="tags"
          className="block text-gray-700 font-semibold mb-2"
        >
          Tags (separadas por vírgula)
        </label>
        <input
          type="text"
          id="tags"
          value={formData.tags.join(", ")}
          onChange={handleTagChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="images"
          className="block text-gray-700 font-semibold mb-2"
        >
          Imagens (URLs, separadas por vírgula)
        </label>
        <input
          type="text"
          id="images"
          value={formData.images.join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              images: e.target.value.split(",").map((url) => url.trim()),
            })
          }
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Salvar
      </button>
    </form>
  );
}
