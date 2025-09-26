import { Op } from "sequelize";
import Task from "../models/TasksModel.js";
import Project from "../models/ProjectModel.js";
import Comment from "../models/CommentsModel.js";
import User from "../models/UserModel.js";
import Notification from "../models/NotificationModel.js";

export const createTask = async (req, res) => {
  try {
    const project = await Task.create({ ...req.body });
    await Notification.create({
      user_id: project.assignee_id,
      task_id: project.id,
      message: `A new task "${project.title}" has been assigned to you.`,
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTaskByAssigneeId = async (req, res) => {
  try {
    const userId = req.user && req.user.id;
    const tasks = await Task.findAll({
      where: { assignee_id: userId },

      include: [
        { model: Project },
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTaskByProjectId = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { project_id: req.params.id },
      include: [
        { model: Project },
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    await task.destroy();
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTaskStatusId = async (req, res) => {
  try {
    const { status, id } = req.body;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    task.status = status;
    await task.save();

    res.json({ message: "Task status updated", task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const searchTasks = async (req, res) => {
  try {
    const { query } = req.query;
    const userId = req.user && req.user.id;
    if (!query) {
      const tasks = await Task.findAll({
        where: {
          assignee_id: userId,
        },
        include: [
          { model: Project },
          {
            model: Comment,
            include: [User],
          },
        ],
      });

      return res.json(tasks);
    }
    const tasks = await Task.findAll({
      where: {
        assignee_id: userId,
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { description: { [Op.like]: `%${query}%` } },
        ],
      },
      include: [
        { model: Project },
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
