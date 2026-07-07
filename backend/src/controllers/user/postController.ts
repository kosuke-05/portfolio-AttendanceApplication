import { postService } from "../../services/user/postService.js";
import type { Request, Response } from "express";

// ユーザー登録処理
export const userPostController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await postService(data);

    return res.status(201).json({
      result,
      message: "ユーザー登録に成功しました。"
    });
  } catch(err) {
    if(err instanceof Error) {
      return res.status(401).json({
        message: err.message
      })
    }
  }
};