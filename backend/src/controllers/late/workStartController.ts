import type { Request, Response } from "express";
import { lateWorkStartService } from "../../services/late/workStartService.js";

export const lateWorkStartController = async (req: Request, res: Response) => {
  try {
    await lateWorkStartService(req.body.lateReason);

    return res.status(200).json({
      message: "遅刻理由の登録完了"
    });
  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    })
  }
};