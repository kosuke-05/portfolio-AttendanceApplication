import type { Request, Response } from "express";
import { lateWorkFinishService } from "../../services/late/workFinishService.js";

export const lateWorkFinishController = async (req: Request, res: Response) => {
  await lateWorkFinishService(req.body.lateReason);
};