"use client"

import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

// ユーザー新規登録ボタン
export const UserRegistrationButton = () => {
  // RHFから取得
  const {formState} = useFormContext();

  return (
    <Button
      variant="contained"
      type="submit"
      disabled={!formState.isDirty || !formState.isValid}>
      新規登録
    </Button>
  )
};