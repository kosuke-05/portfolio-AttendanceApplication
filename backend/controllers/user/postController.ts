import { postService } from "../../services/user/postService.js";
import type { Request, Response } from "express";


// ユーザー登録処理
export const userPostController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await postService(data);

    console.log(`登録データ：${data}`);

    return res.status(201).json(result);
  } catch(err) {
    console.error(err);
    return res.status(500).json({ message : "error" });
  }
};