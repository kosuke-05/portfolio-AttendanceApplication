"use client"

// 出勤・退勤
export type AttendanceType = "出勤" | "退勤";

// Buttonsのprops
export type ButtonsPropsType = {
  branchAttendanceStatus: (status: AttendanceStatusType) => void,
  lateReasonSubmit: (lateReason: string) => void
};

// 出勤・退勤・休憩開始・休憩終了
export type AttendanceStatusType = "work_start" | "work_finish" | "break_start" | "break_finish";

// LateTextFieldのpropsの型
export type LateTextFieldPropsType = {
  lateReasonSubmit: (lateReason: string) => void
};