import type { QueryResult } from "pg";
import type { UserLoginType } from "../../../../types/user/userType.js";
import { UserLoginRepository } from "../../../repository/user/login/userLoginRepository.js";
import bcrypt from "bcrypt";

/**
 * ・メールアドレス・パスワードの両方が合致するカラムを取得
 * ①serviceからrepositoryに対して、メールアドレスのみを渡す
 * ②メールアドレスに合致するカラムを取得
 * ③service内で仮引数で受け取ったパスワードが合致するカラムを探す
 */
export const UserLoginService = async (data: UserLoginType) => {
  const user: QueryResult = await UserLoginRepository(data.mailAddress);

  if(!user) {
    throw new Error("メールアドレスかパスワードが違います。");
  }

  // パスワードの照合
  const isMatch = await bcrypt.compare(data.password, user.pass_word);
};