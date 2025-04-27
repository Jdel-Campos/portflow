export interface FormTextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};

export interface UploadMultipleInputProps {
  id: string;
  label: string;
  value?: string[];
  onUpload: (urls: string[]) => void;
}

export interface UploadFileInputProps {
  id: string;
  label: string;
  onUpload: (url: string) => void;
  value?: string;
};

export interface LinkInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (id: string, value: string) => void;
}

export interface ProjectFormData {
  title: string;
  description: string;
  tags: string[];
  overview: string;
  reflections: string;
  challenge: string;
  lineRationale: string;
  tools: string[];
  links: {
    github: string;
    vercel: string;
    behance: string;
    dribbble: string;
  };
  coverImage: string;  // Aqui vai a URL gerada pelo Supabase
  images: string[];    // Lista de URLs geradas pelo Supabase
  videos: string[];    // Lista de URLs geradas pelo Supabase

  // Campos temporários para arquivos antes do upload:
  coverImageFile?: File;
  imagesFiles?: File[];
  videosFiles?: File[];
}

export const InitialProjectFormData: ProjectFormData = {
  title: "",
  description: "",
  tags: [],
  overview: "",
  reflections: "",
  challenge: "",
  lineRationale: "",
  tools: [],
  links: {
    github: "",
    vercel: "",
    behance: "",
    dribbble: "",
  },
  coverImage: "",
  images: [],
  videos: [],
};

import { z } from "zod";

// Schema de validação usando Zod
export const projectFormSchema = z.object({
  title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
  description: z.string().min(10, "A descrição deve ter no mínimo 10 caracteres"),
  tags: z.array(z.string()),
  overview: z.string().min(10, "O overview deve ter no mínimo 10 caracteres"),
  reflections: z.string().min(10, "As reflexões devem ter no mínimo 10 caracteres"),
  challenge: z.string().min(10, "O desafio deve ter no mínimo 10 caracteres"),
  lineRationale: z.string().min(10, "A justificativa deve ter no mínimo 10 caracteres"),
  tools: z.array(z.string()),
  links: z.object({
    github: z.string().url("Insira uma URL válida para o Github"),
    vercel: z.string().url("Insira uma URL válida para o Vercel"),
    behance: z.string().url("Insira uma URL válida para o Behance"),
    dribbble: z.string().url("Insira uma URL válida para o Dribbble"),
  }),
  coverImage: z.string().url("Insira uma URL válida para a imagem de capa"),
  images: z.array(z.string().url()),
  videos: z.array(z.string().url()),
});

// E aí geramos o tipo automaticamente a partir do schema
export type ProjectZodFormData = z.infer<typeof projectFormSchema>;
