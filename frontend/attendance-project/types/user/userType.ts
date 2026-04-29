"use client"

import { UserValidations } from "@/schemas/userSchema";
import zod from "zod";

// RHFと連携するための型
export type UserType = zod.infer<typeof UserValidations>;

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
