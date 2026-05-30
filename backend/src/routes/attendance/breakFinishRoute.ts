import { Router } from "express";
import { authMiddleware } from "../../middleware/authMiddleware.js";


const breakFinishRouter = Router();

breakFinishRouter.post(
  "/",
  authMiddleware,
  
)