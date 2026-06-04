"use client"

import { Button } from "@mui/material"
import { useFormContext } from "react-hook-form"

// 遅刻理由を記入後の送信ボタン
export const LateReasonSubmitButton = () => {
  // RHFを取得
  const { formState: {isDirty, isValid} } = useFormContext();

  return (
    <Button
      variant="contained"
      type="submit"
      disabled={!isDirty || !isValid}>
      記入内容を送信
    </Button>
  )
};