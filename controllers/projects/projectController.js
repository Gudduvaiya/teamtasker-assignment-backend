import db from "../../db/dbConnection.js";
import Project from "../../models/ProjectModel.js";

export const createProject = async (req, res) => {
  const owner = req.user && req.user.id;
  try {
    const project = await Project.create({ ...req.body, owner });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllProject = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProjectByUserId = async (req, res) => {
  try {
    const owner = req.user && req.user.id;
    const projects = await Project.findAll({ where: { owner } });
    if (!projects || projects.length === 0) return res.status(404).json({ error: "No projects found for this user" });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    await project.update(req.body);
    res.json({ message: "Project updated", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    await project.destroy();
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
