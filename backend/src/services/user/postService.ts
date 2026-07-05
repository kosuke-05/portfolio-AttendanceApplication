import type { UserInputType } from "../../../types/user/userType.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userPostRepository } from "../../repository/user/repositories.js";

// ビジネスロジック
export const postService = async (data: UserInputType) => {
  // バリデーション
  if(!data.name || !data.departmentName || !data.mailAddress || !data.password) {
    throw new Error("新規登録に失敗しました");
  }

  // パスワードのハッシュ化
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // repositoryの呼び出し
  const result = await userPostRepository({
    ...data,
    password: hashedPassword
  });

  // 返ってきたデータを整形
  const user = result.rows[0];

  // トークンを生成
  const token = jwt.sign(
    {
      user_id: user.id,
      name: user.name
    },
    "secretKey",
    { expiresIn: "1h" }
  );

  // パスワード以外を返す
  return {
    user: {
      id: user.id,
      name: user.name,
      department_name: user.department_name,
      mail_address: user.mail_address
    },
    message: "ユーザー新規登録に成功しました。",
    token
  }
};