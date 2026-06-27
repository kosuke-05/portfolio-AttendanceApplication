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

// テーブルから取得したレコード内容
export type TableType = {
  id: number,
  name: string,
  department_name: "generalAffairs" | "development" | "accounting" | "sales",
  mail_address: string,
  pass_word: string
};

// 上記の型からパスワードのみを省いた型
export type TableExcludePassWord = Exclude<TableType, "pass_word">;