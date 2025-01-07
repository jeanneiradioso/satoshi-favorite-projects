import {
  TableContainer,
  Paper,
  Table,
  TableCell,
  TableBody,
  IconButton,
  Button,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import { StyledTableHead, StyledTableRow } from "./list.styles";
import useProjects from "../../../hooks/useProjects";
import SkeletonList from "./skeleton";
import { Project } from "../../../interfaces/project";
import useFavoriteProjects from "../../../hooks/useFavoriteProjects";
import useProjectDetails from "../../../hooks/useProjectDetails";
import { clearSelectedProject } from "../../../store/slices/projectSlice";

const List: React.FC = () => {
  const navigate = useNavigate();
  const { projects, isLoading, fetchProjects } = useProjects();
  const { updateProjectDetails, clearProject } = useProjectDetails();
  const { toggleFavoriteProject } = useFavoriteProjects();

  const handleEditClick = (id: string) => {
    navigate(`/projects/${id}/edit`);
    const project: any = projects.find((p) => p.id == id);
  };

  const handleCreateClick = () => {
    clearProject()
    navigate("/projects/new")
  }

  const handleFavoriteClick = (project: Project) => {
    let selected = { ...project };
    selected.isFavorite = !selected.isFavorite;
    updateProjectDetails(selected);
    toggleFavoriteProject(selected);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="ml-60 px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Projects List</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateClick}
        >
          Create Project
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <StyledTableHead>
            <TableRow>
              <TableCell className="!font-bold">Project Title</TableCell>
              <TableCell className="!font-bold" align="left">
                Start Date
              </TableCell>
              <TableCell className="!font-bold" align="left">
                End Date
              </TableCell>
              <TableCell className="!font-bold" align="left">
                Description
              </TableCell>
              <TableCell className="!font-bold" align="left">
                Project Manager
              </TableCell>
              <TableCell className="!font-bold" align="left"></TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {isLoading ? (
              <SkeletonList />
            ) : (
              projects.map((project) => (
                <StyledTableRow key={project.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => navigate(`${project.id}`)}
                  >
                    {project.title}
                  </TableCell>
                  <TableCell align="left">{project.startDate}</TableCell>
                  <TableCell align="left">{project.endDate}</TableCell>
                  <TableCell align="left">{project.description}</TableCell>
                  <TableCell align="left">{project.projectManager}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      sx={{
                        color: project.isFavorite ? "#e91e63" : "inherit",
                      }}
                      onClick={() => handleFavoriteClick(project)}
                    >
                      <StarsIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditClick(project.id)}
                      sx={{ marginLeft: 1 }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
