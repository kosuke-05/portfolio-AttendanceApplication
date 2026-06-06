"use client"

import { UserTypeAddId } from "../user/userType"

type AttendanceKey = "work_start" | "work_finish" | "break_start" | "break_finish";

// ストアで使用する型
export type UserStoreType = {
  loginUser: UserTypeAddId | null,
  setLoginUser: (user: UserTypeAddId) => void
  logout: () => void,

  // 出勤・退勤・休憩に関する現在状況
  attendanceStatus: {
    work_start: boolean,
    work_finish: boolean,
    break_start: boolean,
    break_finish: boolean
  },

  setAttendanceStatus: (key: AttendanceKey, value: boolean) => void,

  resetAttendanceStatus: () => void,

  // 出勤・退勤・休憩の時刻
  attendanceTime: {
    work_start: string,
    work_finish: string,
    break_start: string,
    break_finish: string
  },

  setAttendanceTime: (key: AttendanceKey, value: string) => void,

  resetAttendanceTime: () => void,

  // 規定の勤怠時刻を超過している場合の判定結果
  overLimitTime: {
    work_start: boolean,
    work_finish: boolean,
    break_start: boolean,
    break_finish: boolean
  },

  setOverLimitTime: (key: AttendanceKey, value: boolean) => void,

  resetOverLimitTime: () => void,

  // 出勤・退勤・休憩開始・休憩終了のどれか最新メッセージを管理
  alertMessage: string,

  setAlertMessage: (message: string) => void
};