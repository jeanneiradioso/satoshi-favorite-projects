import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../interfaces/project";

interface ProjectState {
  project: Project;
  isLoading: boolean;
}

const initialState: ProjectState = {
  project: {
    id: "",
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    isFavorite: false,
    projectManager: ""
  },
  isLoading: false
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedProject(state: any, action: PayloadAction<any>) {
      state.project = action.payload;
    },
    clearSelectedProject(state: any) {
      state.project = initialState.project;
    },
    setLoading(state: any, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  },
});

export const { setSelectedProject, setLoading, clearSelectedProject } = projectSlice.actions;
export default projectSlice.reducer;
