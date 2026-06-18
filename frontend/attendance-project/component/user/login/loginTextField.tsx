"use client"

import { LoginTextFieldType } from "@/types/user/userType";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

// ログイン時にメールアドレス・パスワードを入力するフォーム
export const LoginTextField = ({
  name,
  label,
  placeholder
}: LoginTextFieldType) => {
  // RHFから取得
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState}) => (
        <TextField
          {...field}
          label={label}
          placeholder={placeholder}
          error={fieldState.invalid}
          helperText={fieldState.error?.message} />
      )} />
  )
};