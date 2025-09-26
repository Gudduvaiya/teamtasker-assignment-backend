import { DataTypes } from "sequelize";
import dbCon from "../db/dbConnection.js";
import Project from "../models/ProjectModel.js";

const Task = dbCon.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  project_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM("Todo", "In Progress", "Done"),
    defaultValue: "Todo",
  },
  priority: {
    type: DataTypes.STRING(50),
  },
  assignee_id: {
    type: DataTypes.INTEGER, 
  },
  due_date: {
    type: DataTypes.DATE,
  },
}, {
  tableName: "tasks",
  timestamps: false,
});

// Relationships
Project.hasMany(Task, { foreignKey: "project_id" });
Task.belongsTo(Project, { foreignKey: "project_id" });

export default Task;
