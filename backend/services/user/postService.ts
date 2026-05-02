import { userPostRepository } from "../../repository/repositories.js";
import type { UserInputType } from "../../types/user/userType.js";
import bcrypt from "bcrypt";

// ビジネスロジック
export const postService = async (data: UserInputType) => {
  // バリデーション
  if(!data.name || !data.departmentName || !data.mailAddress || !data.password) {
    console.log("データが見つかりません。");
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

  console.log(`result : ${result}`);

  // パスワード以外を返す
  return {
    id: user.id,
    name: user.name,
    department_name: user.departmentName,
    mail_address: user.mailAddress,
    pass_word: user.password
  }
};