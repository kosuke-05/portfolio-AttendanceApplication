import type { UserInputType } from "../../types/user/userType.js";


// ビジネスロジック
export const postService = async (data: UserInputType) => {
  // バリデーション
  if(!data.name || !data.departmentName || !data.mailAddress || !data.password) {
    throw new Error("データの内容が見つかりません")
  }

} 