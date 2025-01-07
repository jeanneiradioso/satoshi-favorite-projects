import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import projectListSlice from "./slices/projectListSlice";
import favoriteSlice from "./slices/favoritesSlice";

const store = configureStore({
  reducer: {
    project: projectSlice,
    projectList: projectListSlice,
    favoriteProjects: favoriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
