import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware  = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Authorizationの取得
    const authHeader = req.headers.authorization;

    // トークン取得
    const token = authHeader?.split(" ")[1];

    // トークンが有効か否か確認
    if(!token) {
      return res.status(401).json({
        message: "トークンが失効しています"
      });
    };

    // JWT検証
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    // 誰のトークンなのか
    req.user = decoded as {
      userId: number,
      name: string
    };

    // 次の処理へ
    next();

  } catch(err) {
    return res.status(500).json({
      message: "Server Error"
    });
  };
};