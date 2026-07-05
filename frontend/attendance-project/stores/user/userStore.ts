"use client"

import { AlertMessageType, registrationOrLoginMessageType, UserStoreType } from "@/types/store/userStoreType";
import { AttendanceStatusType } from "@/types/top/topTypes";
import { UserTypeAddId } from "@/types/user/userType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      loginUser: null,
      setLoginUser: (user: UserTypeAddId) => set({ loginUser: user }),
      logout: () => set({ loginUser: null }),

      loginMessage: {
        message: null,
        result: null
      },
      setLoginMessage: (param: registrationOrLoginMessageType) => set({
        loginMessage: {
          message: param.message,
          result: param.result
        }
      }),

      userRegistrationMessage: {
        message: null,
        result: null
      },
      setUserRegistrationMessage: (param: registrationOrLoginMessageType) => set({ userRegistrationMessage: param }),

      attendanceStatus: "none",

      setAttendanceStatus: (value: AttendanceStatusType) => set({ attendanceStatus: value }),

      resetAttendanceStatus: () => set({ attendanceStatus: "none" }),

      attendanceTime: {
        work_start: "",
        work_finish: "",
        break_start: "",
        break_finish: ""
      },

      setAttendanceTime: (
        key,
        value
      ) =>
        set((state) => ({
          attendanceTime: {
            ...state.attendanceTime,
            [key]: value
          }
        })),

        resetAttendanceTime: () =>
          set(() => ({
            attendanceTime: {
              work_start: "",
              work_finish: "",
              break_start: "",
              break_finish: ""
            }
          })),

      overLimitTime: {
        work_start: false,
        work_finish: false,
        break_start: false,
        break_finish: false
      },

      setOverLimitTime: (
        key,
        value
      ) =>
        set((state) => ({
          overLimitTime: {
            ...state.overLimitTime,
            [key]: value
          }
        })),

      resetOverLimitTime: () =>
        set(() => ({
          overLimitTime: {
            work_start: false,
            work_finish: false,
            break_start: false,
            break_finish: false
          }
        })),

      alertMessage: {
        result: "",
        message: ""
      },

      setAlertMessage: (message: AlertMessageType) => set({ alertMessage: message }),

      resetAlertMessage: () =>
        set(() => ({
          alertMessage: {
            result: "",
            message: ""
          }
        })),

      loginDialog: false,

      setLoginDialog: (bool: boolean) => set({ loginDialog: bool })
    }),
    {
      name: "user-storage",
    }
  )
);