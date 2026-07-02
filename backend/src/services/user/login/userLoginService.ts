import type { QueryResult } from "pg";
import type { TableType, UserLoginType } from "../../../../types/user/userType.js";
import { UserLoginRepository } from "../../../repository/user/login/userLoginRepository.js";
import bcrypt from "bcrypt";

/**
 * ・メールアドレス・パスワードの両方が合致するカラムを取得
 * ①serviceからrepositoryに対して、メールアドレスのみを渡す
 * ②メールアドレスに合致するカラムを取得
 * ③service内で仮引数で受け取ったパスワードが合致するカラムを探す
 */
export const UserLoginService = async (data: UserLoginType) => {
  const user: QueryResult<TableType> = await UserLoginRepository(data.mailAddress);

  if(user.rowCount === 0) {
    throw new Error("メールアドレスかパスワードが間違っています。");
  }

  const loginUser = user.rows[0]!;

  // パスワードの照合
  const isMatch = await bcrypt.compare(data.password, loginUser.pass_word);

  if(isMatch) {
    return {
      user: {
        id: loginUser.id,
        name: loginUser.name,
        departmentName: loginUser.department_name,
        mailAddress: loginUser.mail_address
      },
      message: "ログイン成功"
    }
  }
};