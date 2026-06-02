"use client"

import zod from "zod";

// 出勤遅刻
export const LateWorkStartValidation = zod.object({
  workStart:
    zod
    .string()
    .min(5, {
      message: "5文字以上記入して下さい。"
    })
});

// 退勤の遅延
export const LateWorkFinishValidation = zod.object({
  workFinish:
    zod
    .string()
    .min(5, {
      message: "5文字以上記入して下さい。"
    })
});