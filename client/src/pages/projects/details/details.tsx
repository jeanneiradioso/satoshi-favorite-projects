/** @jsxImportSource @emotion/react */

import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import useProjectDetails from "../../../hooks/useProjectDetails";
import { formStyles } from "./details.styles";
import Field from "./field/field";
import useFavoriteProjects from "../../../hooks/useFavoriteProjects";
import { useNavigate } from "react-router-dom";
import { Project } from "../../../interfaces/project";
import { validateProject } from "./validation/validation";
import SkeletonDetails from "./skeleton";

const Details: React.FC = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    action,
    project,
    fetchProjectDetails,
    updateProjectDetails,
    saveProject,
  } = useProjectDetails();
  const { toggleFavoriteProject } = useFavoriteProjects();
  const [updatedProject, setUpdatedProject] = useState({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isEditable = action !== "view";

  const handleSave = () => {
    const { isValid, errors: validationErrors } = validateProject({
      ...project,
      ...updatedProject,
    });

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    const updatedData = { ...project, ...updatedProject };

    if (action === "new") {
      saveProject(updatedData);
    } else {
      updateProjectDetails(updatedData);
    }

    navigate("/");
  };

  const handleFieldChange = (name: string, value: any) => {
    console.log({
      ...project,
      [name]: value
    })
    setUpdatedProject((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (name === "isFavorite") {
      const data: Project = {
        ...project,
        isFavorite: value,
      };
      toggleFavoriteProject(data);
      updateProjectDetails(data);
    }
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  return (
    <Box component="form" css={formStyles}>
      {isLoading ? (
        <SkeletonDetails />
      ) : (
        <>
          {action !== "new" && (
            <Field
              label="Project ID"
              name="id"
              value={project?.id || ""}
              isEditable={isEditable}
              enableFavorite={!isEditable}
              isFavorite={project?.isFavorite}
              onChange={handleFieldChange}
            />
          )}
          <Field
            label="Project Name"
            name="title"
            value={project?.title || ""}
            isEditable={isEditable}
            onChange={handleFieldChange}
            error={!!errors.title}
            helperText={errors.title}
          />
          <Field
            label="Description"
            name="description"
            value={project?.description || ""}
            isEditable={isEditable}
            onChange={handleFieldChange}
            type="textarea"
          />
          <Field
            label="Start Date"
            name="startDate"
            value={project?.startDate || ""}
            isEditable={isEditable}
            onChange={handleFieldChange}
            type="date"
            error={!!errors.startDate}
            helperText={errors.startDate}
          />
          <Field
            label="End Date"
            name="endDate"
            value={project?.endDate || ""}
            isEditable={isEditable}
            onChange={handleFieldChange}
            type="date"
            error={!!errors.endDate}
            helperText={errors.endDate}
          />
          <Field
            label="Project Manager"
            name="projectManager"
            value={project?.projectManager || ""}
            isEditable={isEditable}
            onChange={handleFieldChange}
            error={!!errors.projectManager}
            helperText={errors.projectManager}
          />
          {isEditable ? (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-6">
              <div className="sm:col-span-3"></div>
              <div className="sm:col-span-9">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  size="medium"
                >
                  {action === "edit" ? "Update" : "Create"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 mt-6">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => navigate("/")}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => navigate(`/projects/${project.id}/edit`)}
              >
                Edit
              </Button>
            </div>
          )}
        </>
      )}
    </Box>
  );
};

export default Details;
