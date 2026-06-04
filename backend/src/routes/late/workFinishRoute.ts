import { Router } from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { lateWorkFinishController } from "../../controllers/late/workFinishController.js";


const lateWorkFinishRouter = Router();

lateWorkFinishRouter.post(
  "/",
  authMiddleware,
  lateWorkFinishController
);

export default lateWorkFinishRouter;