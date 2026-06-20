import type { UserLoginType } from "../../../../types/user/userType.js";
import { UserLoginRepository } from "../../../repository/user/login/userLoginRepository.js";

export const UserLoginService = async (data: UserLoginType) => {
  await UserLoginRepository();
};