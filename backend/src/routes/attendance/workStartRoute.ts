import { Router } from "express";
import { workStartController } from "../../controllers/attendance/workStartController.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

const workStartRouter = Router();

workStartRouter.post(
  "/",
  authMiddleware,
  workStartController
);

export default workStartRouter;