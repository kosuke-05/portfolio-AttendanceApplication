import type { Request, Response } from "express";
import { UserLoginService } from "../../../services/user/login/userLoginService.js";
import type { UserLoginType } from "../../../../types/user/userType.js";

export const UserLoginController = async (req: Request, res: Response) => {
  const body: UserLoginType = req.body;

  await UserLoginService(body);
};