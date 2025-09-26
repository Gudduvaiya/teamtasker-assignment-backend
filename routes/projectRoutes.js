import express from "express";
import {
  createProject,
  getAllProject,
  getProjectById,
  deleteProjectById,
  updateProjectById,
  getProjectByUserId
} from "../controllers/projects/projectController.js";
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";

const router = express.Router();

router.post("/create", userAuthMiddleware, createProject);

router.get("/get-projects", userAuthMiddleware, getAllProject);
router.get("/get-projects/:id", userAuthMiddleware, getProjectById);
router.get("/get-projectsby-userid", userAuthMiddleware, getProjectByUserId);
router.put("/update-project/:id", userAuthMiddleware, updateProjectById);
router.delete("/delete-project/:id", userAuthMiddleware, deleteProjectById);
export default router;
