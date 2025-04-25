import axios from "axios";
import { Project } from "@/types/project.types";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    headers: {
        "Content-Type": "aplication/json",
    },
});

export const getProjects = async(): Promise<Project[]> => {
    const response = await api.get("/projects");
    return response.data;
};

export const createProject = async (
    project: Omit<Project, "_id" | "createdAt" | "updatedAt">
): Promise<Project> => {
    const response = await api.post("/projects", project);
    return response.data;
};

export const updateProject = async (
    id: string,
    project: Omit<Project, "_id" | "createdAt" | "updatedAt">
): Promise<Project> => {
    const response = await api.put("/projects", project);
    return response.data;
};

export const deleteProject = async ( id: string ): Promise<Project> => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
};