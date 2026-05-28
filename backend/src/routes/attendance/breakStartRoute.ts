import { Router } from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { breakStartController } from "../../controllers/attendance/breakStartController.js";


const breakStartRouter = Router();

breakStartRouter.post(
  "/",
  authMiddleware,
  breakStartController
);

export default breakStartRouter;