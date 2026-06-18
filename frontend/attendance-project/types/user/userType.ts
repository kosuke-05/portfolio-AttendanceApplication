"use client"

import { LoginValidation, UserValidations } from "@/schemas/userSchema";
import { SubmitHandler } from "react-hook-form";
import zod from "zod";

// RHFと連携するための型
export type UserType = zod.infer<typeof UserValidations>;

export type LoginUserType = zod.infer<typeof LoginValidation>;

// UserTextFieldのprops
export type UserTextFieldType = {
  name: "name" | "mailAddress" | "password",
  label: string,
  placeholder: string
};

// UserSelectBoxのprops
export type UserSelectBoxType = {
  name: "departmentName",
  label: string,
  departmentNameArray: departmentNameArrayType[]
};

// departmentNameArrayの型
type departmentNameArrayType = {
  name: "総務部" | "開発部" | "経理部" | "営業部",
  value: "generalAffairs" | "development" | "accounting" | "sales"
};

// ユーザー登録時の初期値
export type UserInitialFormType = {
  name: string,
  departmentName: string,
  mailAddress: string,
  password: string
};

// idを追加した型
export type UserTypeAddId = {
  id: string,
  name: string,
  departmentName: "generalAffairs" | "development" | "accounting" | "sales",
  mailAddress: string
};

// ログイン時に表示するダイアログのフォーム
export type LoginTextFieldType = {
  name: "mailAddress" | "password",
  placeholder: string,
  label: "メールアドレス" | "パスワード"
};

// LoginDialogのprops
export type LoginDialogPropsType = {
  loginUserSubmit: SubmitHandler<LoginUserType>
};