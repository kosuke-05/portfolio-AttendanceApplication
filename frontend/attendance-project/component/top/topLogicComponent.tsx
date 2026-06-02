"use client"

import Box from "@mui/material/Box";
import { StampButtons } from "./stampButtons";
import { useState } from "react";
import { WorkStartPostHook } from "@/hooks/attendance/workStartPostHook";
import { WorkFinishPostHook } from "@/hooks/attendance/workFinishPostHook";
import { AttendanceStatusType } from "@/types/top/topTypes";
import { BreakStartPostHook } from "@/hooks/attendance/breakStartPostHook";
import { BreakFinishPostHook } from "@/hooks/attendance/breakFinishPostHook";
import { LateWorkStartPostHook } from "@/hooks/late/workStartPostHook";
import { SubmitHandler } from "react-hook-form";

// トップページのロジックコンポーネント
export const TopLogicComponent = () => {
  // 出勤か退勤の分岐管理
  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceStatusType | "">("");

  /**
   * ①出勤時のhooks呼び出し
   * ②退勤時のhooks呼び出し
   */
  const workStartHook = WorkStartPostHook();
  const workFinishHook = WorkFinishPostHook();
  const breakStartHook = BreakStartPostHook();
  const breakFinishHook = BreakFinishPostHook();
  const lateWorkStartHook = LateWorkStartPostHook();
  /**
   * 出勤・退勤ボタン押下後の処理
   * ①出勤・退勤いずれかによって処理を分岐
   * ②出勤の場合、
   * ・hooks層を呼び出す
   * ・attendanceStatusにwork_startを渡す
   *
   * ●共通項
   * ①ストアからattendanceStatusを取得して、オブジェクトのプロパティ値にtrueを渡す
   */
  const branchAttendanceStatus = (status: AttendanceStatusType) => {
    setAttendanceStatus(status);

    if(attendanceStatus === "work_start") {
      workStartHook.mutate();
    } else if(attendanceStatus === "work_finish") {
      workFinishHook.mutate();
    } else if(attendanceStatus === "break_start") {
      breakStartHook.mutate();
    } else if(attendanceStatus === "break_finish") {
      breakFinishHook.mutate();
    }
  };

  // 遅刻理由記入後の送信処理
  const lateReasonSubmit: SubmitHandler<string> = (lateReason) => {
    lateWorkStartHook.mutate(lateReason);
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
      <StampButtons
        branchAttendanceStatus={branchAttendanceStatus}
        lateReasonSubmit={lateReasonSubmit} />
    </Box>
  )
};