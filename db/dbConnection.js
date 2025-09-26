import mySql from "mysql2";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbCon = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);
// const dbCon = mySql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

export default dbCon;
