import axios from "axios";
import { Project } from "../interfaces/project";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProjects = async () => {
  return await axios.get(`${API_BASE_URL}/projects`);
};

export const getProjectById = async (id: string) => {
  return await axios.get(`${API_BASE_URL}/projects/${id}`);
};

export const createProject = async (project: Project) => {
  return await axios.post(`${API_BASE_URL}/projects`, project, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProject = async (id: string, project: Project) => {
  return await axios.put(`${API_BASE_URL}/projects/${id}`, project, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteProject = async (id: string) => {
  return await axios.delete(`${API_BASE_URL}/projects/${id}`);
};

export const updateFavoriteProject = async (id: string, isFavorite: boolean) => {
  return await axios.put(`${API_BASE_URL}/projects/${id}/favorite?isFavorite=${isFavorite}`);
};

export const getFavoriteProjects = async () => {
  return await axios.get(`${API_BASE_URL}/projects/favorites`);
};
