// ユーザー登録時のデータ
export type UserInputType = {
  name: string,
  departmentName: "generalAffairs" | "development" | "accounting" | "sales",
  mailAddress: string,
  password: string
};

// ログイン情報登録時の型
export type UserLoginType = {
  mailAddress: string,
  password: string
};