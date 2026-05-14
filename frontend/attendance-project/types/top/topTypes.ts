"use client"

import { Dispatch, SetStateAction } from "react";

// 出勤・退勤
export type AttendanceType = "出勤" | "退勤";

// 休憩開始・休憩終了
export type BreakStartEndType = "休憩開始" | "休憩終了";

// Buttonsのprops
export type ButtonsPropsType = {
  attendanceArray: AttendanceType[],
  breakArray: BreakStartEndType[],
  branchAttendanceStatus: (status: AttendanceType) => void,
  attendanceStatus: "work_start" | "work_finish" | ""
};