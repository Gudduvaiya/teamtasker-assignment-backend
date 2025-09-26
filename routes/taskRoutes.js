import express from 'express';
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";
import { createTask,deleteTaskById,getTaskByAssigneeId,getTaskByProjectId,searchTasks,updateTaskStatusId } from '../controllers/tasksController.js';

const router = express.Router();

router.post("/create", userAuthMiddleware, createTask);
router.delete("/delete/:id", userAuthMiddleware, deleteTaskById);
router.get("/assigned-for", userAuthMiddleware, getTaskByAssigneeId);
router.get("/project/:id", userAuthMiddleware, getTaskByProjectId);
router.put("/update-status", userAuthMiddleware, updateTaskStatusId);
router.get("/search-tasks", userAuthMiddleware, searchTasks);

export default router;