import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../interfaces/project";

interface ProjectListState {
  isLoading: boolean;
  projects: Project[];
}

const initialState: ProjectListState = {
  isLoading: false,
  projects: [],
};

const projectListSlice = createSlice({
  name: "projectList",
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
    },
    setProjectDetails(state, action: PayloadAction<Project>) {
      state.projects = state.projects.map((proj: Project) => {
        if (proj.id === action.payload.id) {
          proj = action.payload;
        }
        return proj;
      });
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setProjects, setLoading, setProjectDetails } =
  projectListSlice.actions;
export default projectListSlice.reducer;
