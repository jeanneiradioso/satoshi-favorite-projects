const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3000;

let projects = [
  {
    id: "1",
    title: "Project Alpha",
    startDate: "2025-01-01",
    endDate: "2025-02-01",
    isFavorite: false,
    description: "Description for Project Alpha",
    projectManager: "John Doe",
  },
  {
    id: "2",
    title: "Project Beta",
    description: "Description for Project Beta",
    startDate: "2025-01-01",
    endDate: "2025-02-01",
    isFavorite: true,
    projectManager: "John Doe",
  },
  {
    id: "3",
    title: "Project Gamma",
    description: "Description for Project Gamma",
    startDate: "2025-01-01",
    endDate: "2025-02-01",
    isFavorite: true,
    projectManager: "John Doe",
  },
];

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// API endpoints

app.put("/projects/:id/favorite", (req, res) => {
    const project = projects.find((p) => p.id === req.params.id);
    const { isFavorite } = req.query;
  
    if (project) {
      // Validate query parameter
      if (isFavorite === undefined || (isFavorite !== "true" && isFavorite !== "false")) {
        return res.status(400).json({ message: "Invalid isFavorite value. Must be 'true' or 'false'." });
      }
  
      project.isFavorite = isFavorite === "true";
      res.json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
});
  
app.get("/projects/favorites", (req, res) => {
  const favorites = projects.filter((proj) => proj.isFavorite);
  res.json(favorites);
});

app.get("/projects", (req, res) => {
  setTimeout(() => {
    res.json(projects);
  }, 1000);
});

app.get("/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.post("/projects", (req, res) => {
  const newProject = {
    ...req.body,
    id: (projects.length + 1).toString()
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.put("/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (project) {
    Object.assign(project, req.body);
    res.json(project);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.delete("/projects/:id", (req, res) => {
  const projectIndex = projects.findIndex((p) => p.id === req.params.id);
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
