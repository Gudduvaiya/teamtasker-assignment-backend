import { DataTypes } from "sequelize";
import dbCon from "../db/dbConnection.js";

const Project = dbCon.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  owner: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "projects",
  timestamps: false,
});

export default Project;
