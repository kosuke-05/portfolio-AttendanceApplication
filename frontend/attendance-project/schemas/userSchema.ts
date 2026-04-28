"use client"

import zod from "zod";

// ユーザー新規登録時のバリデーション
export const UserValidations = zod.object({
  name:
    zod
    .string()
    .min(2, {
      message: "2文字以上で登録して下さい。"
    }),

  departmentName:
    zod
    .string()
    .min(1, {
      message: "選択必須項目です。"
    })
    .refine(
      (v) => ["generalAffairs", "development", "accounting", "sales"].includes(v)
    ),

  mailAddress:
    zod
    .email({
      message: "アドレスの形式に誤りがあります。"
    }),

  password:
    zod
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message: "8桁以上、小文字・大文字・数字を含めてください。"
      }
    )
});