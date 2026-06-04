"use client"

import { WorkStartPostApi } from "@/api/late/workStartPostApi";
import { UserStore } from "@/stores/user/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"

// 出勤遅刻理由のAPi通信
export const LateWorkStartPostHook = () => {
  // キャッシュ操作
  const queryClient = useQueryClient();

  // ストアから取得
  const setOverLimitTime = UserStore((state) => state.setOverLimitTime);

  return useMutation({
    mutationFn: WorkStartPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      setOverLimitTime("work_start", true);
    }
  })
}