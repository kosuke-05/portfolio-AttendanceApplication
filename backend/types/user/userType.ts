// ユーザー登録時のデータ
export type UserInputType = {
  name: string,
  departmentName: "generalAffairs" | "development" | "accounting" | "sales",
  mailAddress: string,
  password: string
};