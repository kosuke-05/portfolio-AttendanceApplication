import type { Request, Response } from "express";
import { UserLoginService } from "../../../services/user/login/userLoginService.js";
import type { TableExcludePassWord, UserLoginType } from "../../../../types/user/userType.js";

export const UserLoginController = async (req: Request, res: Response) => {
  try {
    const body: UserLoginType = req.body;

    const user = await UserLoginService(body);

    return res.status(200).json({
      user: user
    })
  } catch(err) {
    if(err instanceof Error) {
      return res.status(401).json({
        message: err.message
      })
    }
  }
};