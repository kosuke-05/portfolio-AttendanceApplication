"use client"

import zod from "zod";

// 出勤遅刻・退勤時刻の超過理由
export const LateValidation = zod.object({
  lateWorkStart:
    zod
    .string()
    .min(5, {
      message: "5文字以上記入して下さい。"
    }),

  lateWorkFinish:
  zod
  .string()
  .min(5, {
    message: "5文字以上記入して下さい。"
  })
});
