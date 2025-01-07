import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../interfaces/project";

interface Favoritestate {
  isLoading: boolean;
  favorites: Project[];
}

const initialState: Favoritestate = {
  isLoading: false,
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favoriteProjects",
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Project[]>) {
      state.favorites = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    updateFavorite(state, action: PayloadAction<Project>) {
      const { id, isFavorite } = action.payload;
    
      // Check if the project is already in the favorites
      const isExist = state.favorites.some((proj: Project) => proj.id === id);
    
      if (isFavorite && !isExist) {
        // Add the project if it is not in favorites and the new value is true
        state.favorites.push(action.payload);
      } else if (!isFavorite && isExist) {
        // Remove the project if it is in favorites and the new value is false
        state.favorites = state.favorites.filter((proj: Project) => proj.id !== id);
      }
    },
    setFavoriteDetails(state, action: PayloadAction<Project>) {
      state.favorites = state.favorites.map((proj: Project) => {
        if (proj.id === action.payload.id) {
          proj = action.payload;
        }

        return proj;
      });
    },
  },
});

export const { setFavorites, setLoading, updateFavorite, setFavoriteDetails } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
