import type { Request, Response } from "express";
import { workStartService } from "../../services/attendance/workStartService.js";

export const workStartController = async (req: Request, res: Response) => {
  try {
    // どのユーザーのトークンかを判別
    const userId = req.user?.userId;

    const result = await workStartService(userId!);

    // 有効である場合
    return res.status(200).json({
      message: "出勤登録完了",
      result
    });

  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    });
  };
};