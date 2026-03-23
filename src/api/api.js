import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getResume = () => api.get("/resume");
export const updateResume = (data) => api.put("/resume", data);
export const getExperience = () => api.get("/experience");
export const addExperience = (data) => api.post("/experience", data);
export const deleteExperience = (id) => api.delete(`/experience/${id}`);

export default api;
