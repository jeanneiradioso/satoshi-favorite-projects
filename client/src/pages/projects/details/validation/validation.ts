import { Project } from "../../../../interfaces/project";

// validation.ts
interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
  }
  
  export const validateProject = (data: Project): ValidationResult => {
    const errors: Record<string, string> = {};
  
    if (!data.title?.trim()) {
      errors.title = "Project name is required.";
    }
  
    if (!data.startDate) {
      errors.startDate = "Start date is required.";
    }

    if (!data.endDate) {
        errors.endDate = "End date is required.";
    }

    if (!data.projectManager) {
        errors.projectManager = "Project Manager is required.";
    }
  
    if (
      data.startDate &&
      data.endDate &&
      new Date(data.endDate) < new Date(data.startDate)
    ) {
      errors.endDate = "End date cannot be earlier than start date.";
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };
  