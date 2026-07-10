"use client"

import { AttendanceStatusType } from "../top/topTypes";
import { UserTypeAddId } from "../user/userType"

export type registrationOrLoginMessageType = {
  message: string | null,
  result: boolean | null
};

// alertMessageの型
export type AlertMessageType = {
  result: boolean | null,
  message: string | null
};

// attendanceStatusの型
export type AttendanceStatusObjectType = {
  isWorking: boolean,
  isBreaking: boolean,
  hasFinished: boolean
};

// ストアで使用する型
export type UserStoreType = {
  // ログイン成功時
  loginUser: UserTypeAddId | null,
  setLoginUser: (user: UserTypeAddId) => void,

  logout: () => void,

  // ログイン失敗時
  loginMessage: registrationOrLoginMessageType,
  setLoginMessage: (result: registrationOrLoginMessageType) => void,

  // ユーザー新規登録の際の成功・失敗メッセージ
  userRegistrationMessage: registrationOrLoginMessageType,
  setUserRegistrationMessage: (result: registrationOrLoginMessageType) => void,

  // 出勤・退勤・休憩に関する現在状況
  attendanceStatus: AttendanceStatusObjectType,

  setAttendanceStatus: (status: AttendanceStatusObjectType) => void,

  resetAttendanceStatus: () => void,

  // 出勤・退勤・休憩の時刻
  attendanceTime: {
    work_start: string,
    work_finish: string,
    break_start: string,
    break_finish: string
  },

  setAttendanceTime: (key: AttendanceStatusType, value: string) => void,

  resetAttendanceTime: () => void,

  // 規定の勤怠時刻を超過している場合の判定結果
  overLimitTime: {
    work_start: boolean,
    work_finish: boolean,
    break_start: boolean,
    break_finish: boolean
  },

  setOverLimitTime: (key: AttendanceStatusType, value: boolean) => void,

  resetOverLimitTime: () => void,

  // 出勤・退勤・休憩開始・休憩終了のどれか最新メッセージを管理
  alertMessage: AlertMessageType,

  setAlertMessage: (message: AlertMessageType) => void,

  resetAlertMessage: () => void,

  // ドロワーメニューのログイン押下後にダイアログを表示
  loginDialog: boolean,

  setLoginDialog: (bool: boolean) => void
};