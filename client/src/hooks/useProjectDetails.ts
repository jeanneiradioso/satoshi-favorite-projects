import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createProject, getProjectById, updateProject } from "../api/projects";
import { Project } from "../interfaces/project";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLoading, setSelectedProject, clearSelectedProject } from "../store/slices/projectSlice";
import { setProjectDetails } from "../store/slices/projectListSlice";
import { setFavoriteDetails } from "../store/slices/favoritesSlice";

const useProjectDetails = () => {
  const dispatch = useDispatch();
  let { projectId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const action = projectId
    ? location.pathname.includes("edit")
      ? "edit"
      : "view"
    : "new";

  const project: Project | null = useSelector(
    (state: RootState) => state.project.project
  );

  const isLoading = useSelector((state: RootState) => state.project.isLoading);

  const fetchProjectDetails = async () => {
    if (action == "new") { return };
    dispatch(setLoading(true));
    try {
      const response = await getProjectById(projectId || "");
      dispatch(setSelectedProject(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching projects:", error);
      dispatch(setSelectedProject(null));
      dispatch(setLoading(false));
      navigate("/");
    }
  };

  const clearProject = () => {
    dispatch(clearSelectedProject());
  }

  const updateProjectDetails = async (project: Project) => {
    try {
      await updateProject(project.id, project);
      dispatch(setProjectDetails(project));
      dispatch(setFavoriteDetails(project));
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const saveProject = async (project: Project) => {
    try {
      await createProject(project);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return {
    project,
    isLoading,
    action,
    fetchProjectDetails,
    updateProjectDetails,
    saveProject,
    clearProject
  };
};

export default useProjectDetails;
