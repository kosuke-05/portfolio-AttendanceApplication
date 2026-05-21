"use client"

import { WorkFinishPostApi } from "@/api/user/attendance/workFinishPostApi";
import { setToken } from "@/lib/auth/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 退勤時のhook
export const WorkFinishPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WorkFinishPostApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      // トークンを渡す
      setToken(res.token);
    }
  })
};