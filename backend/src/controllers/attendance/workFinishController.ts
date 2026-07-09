import type { Request, Response } from "express";
import { workFinishService } from "../../services/attendance/workFinishService.js";

export const workFinishController = async (req: Request, res: Response) => {
  try {
    const time = await workFinishService();

    console.log("デバッグ：controller");

    // 有効である場合
    return res.status(200).json({
      message: "退勤時刻の登録完了",
      time
    });

  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    });
  };
}