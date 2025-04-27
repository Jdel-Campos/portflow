"use client";

import { useState } from "react";
import FormTextArea from "@/components/forms/formTextArea";
import UploadInput from "@/components/forms/uploadInput";
import UploadMultipleInput from "@/components/forms/uploadMultipleInput";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import LinkInput from "@/components/forms/linkInput";
import HeaderForms from "@/components/forms/headerForms";
import GeneralFooter from "@/components/footers/generalFooter";
import { ToolCategory } from "@/constants/enums";
import { ProjectFormData, InitialProjectFormData } from "@/types/forms.types";
import {
  handleFileUploads,
  validateForm,
  submitProjectData,
} from "@/utils/projectFormsFunctions";

export default function CreateProjectPage() {
  const [formData, setFormData] = useState<ProjectFormData>(
    InitialProjectFormData
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const updateFormData = await handleFileUploads(formData);

      if (!validateForm(updateFormData)) {
        return;
      }

      const data = await submitProjectData(updateFormData);

      console.log("Your project has been successfully created!", data);

      setFormData(InitialProjectFormData);
    } catch (error) {
      console.log("There was an error creating your project!", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToolToggle = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const handleLinkChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      links: {
        ...prev.links,
        [field]: value,
      },
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 pt-32 py-20">
        <HeaderForms />
        <div className="w-full max-w-3xl">
          {/* Header da página */}
          <div className="">
            <h2 className="text-3xl font-semibold leading-7 text-gray-900">
              Project Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Fill in the details to add a new project to your portfolio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 pt-6">
            <div className="">
              {/* Seção 1: Informações Básicas do projeto */}
              <div className="w-full flex flex-col gap-6 border-b-2 border-dashed  border-gray-900/20 pb-14">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Project Name
                  </label>
                  <div>
                    <input
                      id="title"
                      type="text"
                      name="title"
                      placeholder="Enter the project title"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Description */}
                <FormTextArea
                  id="description"
                  label="Description"
                  placeholder="Describe your project"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />

                {/* Tags */}
                <div className="sm:col-span-3">
                  <label className="font-medium block mb-1"> Tags </label>
                  <div className="mt-2 relative">
                    <select
                      id="tags"
                      name="tags"
                      className="block w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-10 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    >
                      <option>Select a tag</option>
                      <option>Frontend</option>
                      <option>Backend</option>
                      <option>Fullstack</option>
                      <option>UI Design</option>
                      <option>Identidade Visual</option>
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Cover Image (única) */}
                <UploadInput
                  id="coverImage"
                  label="Cover Image"
                  value={formData.coverImage}
                  onUpload={(url) => handleInputChange("coverImage", url)}
                />
              </div>

              {/* Seção 2: Apresentação do projeto */}
              <div className="w-full flex flex-col gap-6 pt-12">
                {/* Overview */}
                <FormTextArea
                  id="overview"
                  label="Overview"
                  placeholder="Describe your project overview"
                  value={formData.overview}
                  onChange={(e) =>
                    handleInputChange("overview", e.target.value)
                  }
                />

                {/* Reflections */}
                <FormTextArea
                  id="reflections"
                  label="Reflections"
                  placeholder="Describe your reflections on the project"
                  value={formData.reflections}
                  onChange={(e) =>
                    handleInputChange("reflections", e.target.value)
                  }
                />

                {/* Challenge */}
                <FormTextArea
                  id="challenge"
                  label="Challenge"
                  placeholder="Describe the challenge you encountered when carrying out this project"
                  value={formData.challenge}
                  onChange={(e) =>
                    handleInputChange("challenge", e.target.value)
                  }
                />

                {/* Line Relationale */}
                <FormTextArea
                  id="lineRationale"
                  label="Line Rationale"
                  placeholder="Describe the reasoning behind your project"
                  value={formData.lineRationale}
                  onChange={(e) =>
                    handleInputChange("lineRationale", e.target.value)
                  }
                />

                {/* Tools */}
                <div className="border-b-2 border-dashed border-gray-900/30 pb-14">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Tools used
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.values(ToolCategory).map((tool) => (
                      <div
                        key={tool}
                        className="inline-flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          value={tool}
                          checked={formData.tools.includes(tool)}
                          onChange={() => handleToolToggle(tool)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor={tool}
                          className="text-sm font-medium text-gray-700"
                        >
                          {tool}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-8 w-full">
                  <LinkInput
                    id="github"
                    label="Github"
                    value={formData.links.github}
                    onChange={(field, value) => handleLinkChange(field, value)}
                  />

                  <LinkInput
                    id="vercel"
                    label="Vercel"
                    value={formData.links.vercel}
                    onChange={(field, value) => handleLinkChange(field, value)}
                  />

                  <LinkInput
                    id="behance"
                    label="Behance"
                    value={formData.links.behance}
                    onChange={(field, value) => handleLinkChange(field, value)}
                  />

                  <LinkInput
                    id="dribbble"
                    label="Dribbble"
                    value={formData.links.dribbble}
                    onChange={(field, value) => handleLinkChange(field, value)}
                  />
                </div>

                {/* Imagens (várias) */}
                <UploadMultipleInput
                  id="images"
                  label="Images of the project"
                  value={formData.images}
                  onUpload={(url) => handleInputChange("images", url)}
                />

                {/* Vídeos (vários) */}
                <UploadMultipleInput
                  id="videos"
                  label="Videos of the project in action"
                  value={formData.videos}
                  onUpload={(url) => handleInputChange("videos", url)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 items-center pt-6">
              <button
                type="submit"
                className={`flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer transition ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  "Publish"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <GeneralFooter />
    </>
  );
}
