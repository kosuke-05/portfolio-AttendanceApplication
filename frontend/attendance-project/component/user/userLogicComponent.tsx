"use client"

import { UserType } from "@/types/user/userType";
import { UserTextField } from "./userTextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidations } from "@/schemas/userSchema";

// ユーザー関連のロジックコンポーネント
export const UserLogicComponent = () => {
  // RHF
  const methods = useForm<UserType>({
    mode: "onChange",
    resolver: zodResolver(UserValidations),
    defaultValues: {
      name: "",
      departmentName: "",
      mailAddress: "",
      password: ""
    }
  });

  return (
    <>
      <UserTextField />
    </>
  )
};