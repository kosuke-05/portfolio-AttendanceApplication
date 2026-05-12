"use client"

import Box from "@mui/material/Box";
import { StampButtons } from "./stampButtons";
import { AttendanceType, BreakStartEndType } from "@/types/top/topTypes";
import { useState } from "react";

// トップページのロジックコンポーネント
export const TopLogicComponent = () => {
  const attendanceArray: AttendanceType[] = ["出勤", "退勤"];
  const breakArray: BreakStartEndType[] = ["休憩開始", "休憩終了"];

  // 出勤か退勤の分岐管理
  const [attendanceStatus, setAttendanceStatus] = useState<"work_start" | "work_finish" | "">("");

  /**
   * 出勤・退勤ボタン押下後の処理
   * ①出勤・退勤いずれかによって処理を分岐
   * ・出勤の場合・・・hooks層の呼び出し
   */
  const branchAttendanceStatus = (status: AttendanceType) => {
    if(status === "出勤")
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
        attendanceArray={attendanceArray}
        breakArray={breakArray}
        setAttendanceStatus={setAttendanceStatus}
        branchAttendanceStatus={branchAttendanceStatus} />
    </Box>
  )
};