import { Router } from "express";
import { attendancePostController } from "../../controllers/attendance/postController.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const attendanceRouter = Router();

attendanceRouter.post(
  "/",
  authMiddleware,
  attendancePostController
);

export default attendanceRouter;