"use client"

import { WorkStartPostApi } from "@/api/late/workStartPostApi";
import { useMutation, useQueryClient } from "@tanstack/react-query"

// 出勤遅刻理由のAPi通信
export const LateWorkStartPostHook = () => {
  // キャッシュ操作
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WorkStartPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });
    }
  })
}