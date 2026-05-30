"use client"

import zod from "zod";

export const LateValidation = zod.object({
  workStart:
    zod
    .string()
    .min(5, {
      message: "5文字以上記入して下さい。"
    }),

  workFinish:
    zod
    .string()
    .min(5, {
      message: "5文字以上記入して下さい。"
    })
});