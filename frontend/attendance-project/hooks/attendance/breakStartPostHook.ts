"use client"

import { BreakStartPostApi } from "@/api/user/attendance/breakStartPostApi";
import { UserStore } from "@/stores/user/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"

// 休憩開始のAPI通信
export const BreakStartPostHook = () => {
  // キャッシュの操作
  const queryClient = useQueryClient();

  // ストアから取得
  const setAttendanceStatus = UserStore((state) => state.setAttendanceStatus);
  const setAttendanceTime = UserStore((state) => state.setAttendanceTime);
  const setAlertMessage = UserStore((state) => state.setAlertMessage);

  return useMutation({
    mutationFn: BreakStartPostApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      setAttendanceStatus({
        workStart: true,
        breakStart: true,
        breakFinish: false,
        workFinish: false
      });
      setAttendanceTime("break_start", res.time);

      setAlertMessage({
        result: true,
        message: res.message
      })
    },

    onError: (res) => {
      setAlertMessage({
        result: false,
        message: res.message
      })
    }
  })
}