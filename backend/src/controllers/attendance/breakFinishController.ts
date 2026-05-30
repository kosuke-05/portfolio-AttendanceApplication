import type { Request, Response } from "express";
import { breakFinishService } from "../../services/attendance/breakFinishService.js";


export const breakFinishController = async (req: Request, res: Response) => {
  try {
    const time = await breakFinishService();

    return res.status(200).json({
      message: "休憩時間終了登録完了",
      time
    })
  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    })
  }
}