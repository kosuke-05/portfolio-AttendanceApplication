"use client"

import { WorkStartPostApi } from "@/api/user/attendance/workStartPostApi";
import { setToken } from "@/lib/auth/token";
import { UserStore } from "@/stores/user/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"

// 出勤時刻の登録hook層
export const WorkStartPostHook = () => {
  // キャッシュ操作
  const queryClient = useQueryClient();

  // ストアから取得
  const attendanceStatusStore = UserStore((state) => state.attendanceStatus);
  const attendanceTime = UserStore((state) => state.attendanceTime);

  return useMutation({
    mutationFn: WorkStartPostApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      // ストアのwork_startをtrueにする
      attendanceStatusStore.work_start = true;

      // 出勤時刻をストアに渡す
      attendanceTime.work_start = res.result.work_start;

      // トークンを渡す
      setToken(res.token);
    }
  });
};