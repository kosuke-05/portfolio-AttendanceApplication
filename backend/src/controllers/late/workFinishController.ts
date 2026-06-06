import type { Request, Response } from "express";
import { lateWorkFinishService } from "../../services/late/workFinishService.js";

export const lateWorkFinishController = async (req: Request, res: Response) => {
  try {
    await lateWorkFinishService(req.body.lateReason);

    return res.status(200).json({
      message: "残業理由の登録完了"
    })
  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    })
  }
};