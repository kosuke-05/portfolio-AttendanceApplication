import { Router } from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { workFinishController } from "../../controllers/attendance/workFinishController.js";

const workFinishRouter = Router();

workFinishRouter.post(
  "/",
  authMiddleware,
  workFinishController
);

export default workFinishRouter;