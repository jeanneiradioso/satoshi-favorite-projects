import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getFavoriteProjects } from "../api/projects";
import {
  setFavorites,
  setLoading,
  updateFavorite,
} from "../store/slices/favoritesSlice";
import { Project } from "../interfaces/project";

const useFavoriteProjects = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favoriteProjects.favorites
  );

  const isLoading = useSelector(
    (state: RootState) => state.favoriteProjects.isLoading
  );

  const fetchFavoriteProjects = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getFavoriteProjects();
      dispatch(setFavorites(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching projects:", error);
      dispatch(setLoading(false));
      dispatch(setFavorites([]));
    }
  };

  const toggleFavoriteProject = (project: Project) => {
    dispatch(updateFavorite(project));
  };

  return {
    favorites,
    isLoading,
    fetchFavoriteProjects,
    toggleFavoriteProject,
  };
};

export default useFavoriteProjects;
