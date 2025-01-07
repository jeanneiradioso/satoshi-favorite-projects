import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLoading, setProjects } from "../store/slices/projectListSlice";
import { getProjects } from "../api/projects";

const useProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(
    (state: RootState) => state.projectList.projects
  );

  const isLoading = useSelector(
    (state: RootState) => state.projectList.isLoading
  );

  const fetchProjects = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getProjects();
      dispatch(setProjects(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching projects:", error);
      dispatch(setLoading(false));
      dispatch(setProjects([]));
    }
  };

  return {
    projects,
    isLoading,
    fetchProjects,
  };
};

export default useProjects;
