"use client"

import { LateWorkStartValidation } from "@/schemas/attendance/lateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, TextField } from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import zod from "zod";
import { LateReasonSubmitButton } from "./buttons";
import { LateTextFieldPropsType } from "@/types/top/topTypes";

// スキーマとの同期
type LateTextFieldType = zod.infer<typeof LateWorkStartValidation>;

// 出勤・退勤が規定時間を超過した場合の理由記入フィールド
export const LateTextField = ({
  lateReasonSubmit
}: LateTextFieldPropsType) => {
  // RHF
  const methods = useForm<LateTextFieldType>({
    mode: "onChange",
    resolver: zodResolver(LateWorkStartValidation),
    defaultValues: {
      workStart: ""
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(lateReasonSubmit)}>
        <Stack direction="column" spacing={2}>
          <Controller
            name="workStart"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="遅刻理由"
                placeholder="遅刻理由を記入して下さい"
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