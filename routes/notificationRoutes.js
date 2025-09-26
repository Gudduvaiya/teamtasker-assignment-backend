import express from "express";
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";
import {
  getUserNotifications,
  updateUserNotification,
} from "../controllers/notificationController.js";

const router = express.Router();
router.get("/get-notifications", userAuthMiddleware, getUserNotifications);
router.put(
  "/check-notification/:id",
  userAuthMiddleware,
  updateUserNotification
);

export default router;
