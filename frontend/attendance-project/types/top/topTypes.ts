"use client"

import { LateValidation } from "@/schemas/attendance/lateSchema";
import { SubmitHandler } from "react-hook-form";
import zod from "zod";

// 出勤・退勤
export type AttendanceType = "出勤" | "退勤";

// Buttonsのprops
export type ButtonsPropsType = {
  branchAttendanceStatus: (status: Exclude<AttendanceStatusType, "none">) => void,
  lateReasonSubmit: SubmitHandler<LateType>,
  attendanceStatus: AttendanceStatusType
};

// 出勤・退勤・休憩開始・休憩終了
export type AttendanceStatusType = "work_start" | "work_finish" | "break_start" | "break_finish" | "none"

// LateTextFieldのpropsの型
export type LateTextFieldPropsType = {
  value: Exclude<AttendanceStatusType, "">,
  lateReasonSubmit: SubmitHandler<LateType>
};

// スキーマとの同期
export type LateType = zod.infer<typeof LateValidation>;