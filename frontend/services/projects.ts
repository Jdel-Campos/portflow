import axios from "axios";
import { Project } from "@/types/project.types";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    headers: {
        "Content-Type": "aplication/json",
    },
});

export const getProjects = async(): Promise<Project[]> => {
    try {
        const response = await api.get("/projects");
        return response.data;
    } catch (error: any) {
        toast.error("Erro ao buscar os projetos!!!!!");
        throw error;
    };
};

export const createProject = async (
    project: Omit<Project, "_id" | "createdAt" | "updatedAt">
): Promise<Project> => {
    try {
        const response = await api.post("/projects", project);
        toast.success("Projeto criado com sucesso!!!");
        return response.data;
    } catch (error: any) {
        toast.error("Erro ao criar o projeto!!!!");
        throw error;
    };
};

export const updateProject = async (
    id: string,
    project: Omit<Project, "_id" | "createdAt" | "updatedAt">
): Promise<Project> => {
    try {
        const response = await api.put("/projects", project);
        toast.success("Projeto atualizar com sucesso!!!");
        return response.data;
    } catch (error: any) {
        toast.error("Erro ao atualizar o projeto!!!!");
        throw error;
    };
};

export const deleteProject = async ( id: string ): Promise<Project> => {
    try {
        const response = await api.delete(`/projects/${id}`);
        toast.success("Projeto deletado com sucesso!!!");
        return response.data;
    } catch (error: any) {
        toast.error("Erro ao adeletar o projeto!!!!");
        throw error;
    };
};