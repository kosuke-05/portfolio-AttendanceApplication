"use client"

import Box from "@mui/material/Box";
import { StampButtons } from "./stampButtons";
import { AttendanceType, BreakStartEndType } from "@/types/top/topTypes";
import { useState } from "react";
import { AttendancePostHook } from "@/hooks/attendance/attendancePostHook";

// トップページのロジックコンポーネント
export const TopLogicComponent = () => {
  const breakArray: BreakStartEndType[] = ["休憩開始", "休憩終了"];

  // 出勤か退勤の分岐管理
  const [attendanceStatus, setAttendanceStatus] = useState<"work_start" | "work_finish" | "">("");

  /**
   * ①出勤時のhooks呼び出し
   */
  const workStartHook = AttendancePostHook();

  /**
   * 出勤・退勤ボタン押下後の処理
   * ①出勤・退勤いずれかによって処理を分岐
   * ②出勤の場合、
   * ・hooks層を呼び出す
   * ・attendanceStatusにwork_startを渡す
   */
  const branchAttendanceStatus = (status: "work_start" | "work_finish") => {
    setAttendanceStatus(status);

    if(attendanceStatus === "work_start") {
      workStartHook.mutate();
    } else if(attendanceStatus === "work_finish") {

    }
  };

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
        breakArray={breakArray}
        branchAttendanceStatus={branchAttendanceStatus} />
    </Box>
  )
};