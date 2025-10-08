import express from "express";
import cors from "cors";
import dbCon from "./db/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import tasksRoutes from "./routes/taskRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import logger from "./logConfig.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use((req,_res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

await dbCon.sync();
// dbCon.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Connected...");
//   }
// });

try {
  await dbCon.authenticate();
  console.log("Connected...");
} catch (error) {
  console.error("Unable to connect:", error);
}
// Routes
app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", tasksRoutes);
app.use("/comments", commentsRoutes);
app.use("/notifications", notificationRoutes);

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
