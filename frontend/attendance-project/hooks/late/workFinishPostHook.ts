"use client"

import { LateWorkFinishPostApi } from "@/api/late/workFinishPostApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 残業発生時のAPI通信
export const LateWorkFinishPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: LateWorkFinishPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] })
    }
  })
};