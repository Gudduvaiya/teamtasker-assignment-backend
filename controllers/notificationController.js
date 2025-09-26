import Notification from "../models/NotificationModel.js";
import User from "../models/UserModel.js";
import Task from "../models/TasksModel.js";

export const getUserNotifications = async (req, res) => {
  try {
    const userId=req.user.id
    const notifications = await Notification.findAll({
      where: { user_id: userId },
      include: [User, Task],
      order: [["createdAt", "DESC"]],
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUserNotification = async (req, res) => {
  try {
    const notification = await Notification.findByPk(req.params.id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });

    notification.is_read = true;
    await notification.save();
    res.json({ message: "Notification marked as read", notification });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
