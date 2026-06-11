"use client"

import { BreakFinishPostApi } from "@/api/user/attendance/breakFinishPostApi";
import { UserStore } from "@/stores/user/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const BreakFinishPostHook = () => {
  // キャッシュ操作
  const queryClient = useQueryClient();

  // ストアから取得
  const setAttendanceStatus = UserStore((state) => state.setAttendanceStatus);
  const setAttendanceTime = UserStore((state) => state.setAttendanceTime);
  const setAlertMessage = UserStore((state) => state.setAlertMessage);

  return useMutation({
    mutationFn: BreakFinishPostApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      setAttendanceStatus("break_finish", true);
      setAttendanceTime("break_finish", res.time);

      setAlertMessage({
        result: "success",
        message: res.message
      })
    },

    onError: (res) => {
      setAlertMessage({
        result: "error",
        message: res.message
      })
    }
  });
};