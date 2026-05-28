"use client"

import { BreakFinishPostApi } from "@/api/user/attendance/breakFinishPostApi";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const BreakFinishPostHook = () => {
  // キャッシュ操作
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: BreakFinishPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    }
  })
}