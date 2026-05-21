import type { Request, Response } from "express";
import { attendancePostService } from "../../services/attendance/attendancePostService.js";


export const attendancePostController = async (req: Request, res: Response) => {
  try {
    await attendancePostService();

    // 有効である場合
    return res.status(200).json({
      message: "出勤登録完了"
    });

  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    });
  };
};