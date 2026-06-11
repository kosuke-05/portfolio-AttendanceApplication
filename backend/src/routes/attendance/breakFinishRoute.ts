import { Router } from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { breakFinishController } from "../../controllers/attendance/breakFinishController.js";


const breakFinishRouter = Router();

breakFinishRouter.post(
  "/",
  authMiddleware,
  breakFinishController
);

export default breakFinishRouter;