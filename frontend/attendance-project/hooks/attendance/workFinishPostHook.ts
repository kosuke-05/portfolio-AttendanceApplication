"use client"

import { WorkFinishPostApi } from "@/api/user/attendance/workFinishPostApi";
import { setToken } from "@/lib/auth/token";
import { UserStore } from "@/stores/user/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 退勤時のhook
export const WorkFinishPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  const setAttendanceStatus = UserStore((state) => state.setAttendanceStatus);
  const setAttendanceTime = UserStore((state) => state.setAttendanceTime);
  const setOverLimitTime = UserStore((state) => state.setOverLimitTime);
  const setAlertMessage = UserStore((state) => state.setAlertMessage);

  return useMutation({
    mutationFn: WorkFinishPostApi,

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["attendance"] });

      setAttendanceStatus("work_finish", true);
      setAttendanceTime("work_finish", res.attendance);
      setOverLimitTime("work_finish", res.isLate);
      setAlertMessage(res.message);

      // トークンを渡す
      setToken(res.token);
    }
  })
};