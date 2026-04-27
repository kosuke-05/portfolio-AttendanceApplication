"use client"

// 出勤・退勤
export type AttendanceType = "出勤" | "退勤";

// 休憩開始・休憩終了
export type BreakStartEndType = "休憩開始" | "休憩終了";

// Buttonsのprops
export type ButtonsPropsType = {
  attendanceArray: AttendanceType[],
  breakArray: BreakStartEndType[]
};