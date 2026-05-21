"use client"

import { UserTypeAddId } from "../user/userType"

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

  // 出勤・退勤・休憩の時刻
  attendanceTime: {
    work_start: string,
    work_finish: string,
    break_start: string,
    break_finish: string
  }
};