"use client"

// 出勤・退勤
export type AttendanceType = "出勤" | "退勤";

// Buttonsのprops
export type ButtonsPropsType = {
  branchAttendanceStatus: (status: "work_start" | "work_finish") => void
};