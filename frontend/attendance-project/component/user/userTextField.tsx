"use client"

import { UserTextFieldType } from "@/types/user/userType";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

// 社員名・メールアドレス・パスワードのテキスト欄
export const UserTextField = ({
  name,
  label,
  placeholder
}: UserTextFieldType) => {
  // RHFから取得
  const {control} = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label={label}
            placeholder={placeholder}
            error={fieldState.invalid}
            helperText={fieldState.error?.message} />
        )} />
    </>
  )
};
