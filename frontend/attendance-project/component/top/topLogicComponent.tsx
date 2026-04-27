"use client"

import Box from "@mui/material/Box";
import { StampButtons } from "./stampButtons";
import { AttendanceType, BreakStartEndType } from "@/types/top/topTypes";

// トップページのロジックコンポーネント
export const TopLogicComponent = () => {
  const attendanceArray: AttendanceType[] = ["出勤", "退勤"];
  const breakArray: BreakStartEndType[] = ["休憩開始", "休憩終了"];

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
        breakArray={breakArray} />
    </Box>
  )
};