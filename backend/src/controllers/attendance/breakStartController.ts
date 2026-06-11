import type { Request, Response } from "express";
import { breakStartService } from "../../services/attendance/breakStartService.js"


export const breakStartController = async (req: Request, res: Response) => {
  try {
    const time = await breakStartService();

    return res.status(200).json({
      message: "休憩開始時刻の登録完了",
      time
    })
  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    })
  }
};