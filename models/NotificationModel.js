import { DataTypes } from "sequelize";
import dbCon from "../db/dbConnection.js";
import User from "./UserModel.js";
import Task from "./TasksModel.js";

const Notification = dbCon.define(
  "Notification",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    task_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Task,
        key: "id",
      },
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "notifications",
    timestamps: true, 
  }
);

User.hasMany(Notification, { foreignKey: "user_id" });
Notification.belongsTo(User, { foreignKey: "user_id" });

Task.hasMany(Notification, { foreignKey: "task_id" });
Notification.belongsTo(Task, { foreignKey: "task_id" });

export default Notification;
