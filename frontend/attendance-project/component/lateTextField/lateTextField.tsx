"use client"

import { LateValidation } from "@/schemas/attendance/lateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import zod from "zod";

// スキーマとの同期
type LateTextFieldType = zod.infer<typeof LateValidation>;

// 出勤・退勤が規定時間を超過した場合の理由記入フィールド
export const LateTextField = () => {
  // RHF
  const methods = useForm<LateTextFieldType>({
    mode: "onChange",
    resolver: zodResolver(LateValidation),
    defaultValues: {
      workStart: "",
      workFinish: ""
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit()}>
        <Controller
          name
      </form>
    </FormProvider>
  )
};