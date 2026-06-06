"use client"

import { LateValidation } from "@/schemas/attendance/lateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, TextField } from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { LateReasonSubmitButton } from "./buttons";
import { LateTextFieldPropsType, LateType } from "@/types/top/topTypes";

// 出勤・退勤が規定時間を超過した場合の理由記入フィールド
export const LateTextField = ({
  value,
  lateReasonSubmit
}: LateTextFieldPropsType) => {
  // RHF
  const methods = useForm<LateType>({
    mode: "onChange",
    resolver: zodResolver(LateValidation),
    defaultValues: {
      lateWorkStart: "",
      lateWorkFinish: ""
    }
  });

  // value値の判定結果
  let result: string = value === "work_start" ? "出勤" : "退勤";

  // value値によってControllerのname属性値を変える
  let nameValue: keyof LateType = value === "work_start" ? "lateWorkStart" : "lateWorkFinish";

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(lateReasonSubmit)}>
        <Stack direction="column" spacing={2}>
          <Controller
            name={nameValue}
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label={result === "出勤" ? "遅刻理由" : "残業理由"}
                placeholder={result === "出勤" ? "遅刻理由を記入して下さい" : "残業理由を記入して下さい"}
                multiline
                rows={5}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ width: "100%"}} />
            )}>
          </Controller>
          <LateReasonSubmitButton />
        </Stack>
      </form>
    </FormProvider>
  )
};