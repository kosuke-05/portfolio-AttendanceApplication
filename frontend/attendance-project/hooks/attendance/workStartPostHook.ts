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
  const setAttendanceStatus = UserStore((state) => state.setAttendanceStatus);
  const setAttendanceTime = UserStore((state) => state.setAttendanceTime);
  const setOverLimitTime = UserStore((state) => state.setOverLimitTime);

  return useMutation({
    mutationFn: WorkStartPostApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      setAttendanceStatus("work_start", true);
      setAttendanceTime("work_start", res.attendance);
      setOverLimitTime("work_start", res.isLate);

      // トークンを渡す
      setToken(res.token);
    }
  });
};