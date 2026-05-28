"use client"

import { UserStoreType } from "@/types/store/userStoreType";
import { UserTypeAddId } from "@/types/user/userType";
import { isValueExpired } from "next/dist/client/components/segment-cache/cache-map";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const UserStore = create<UserStoreType>()(
  persist(
    (set) => ({
      loginUser: null,
      setLoginUser: (user: UserTypeAddId) => set({ loginUser: user }),
      logout: () => set({ loginUser: null }),

      attendanceStatus: {
        work_start: false,
        work_finish: false,
        break_start: false,
        break_finish: false
      },

      setAttendanceStatus: (
        key,
        value
      ) =>
        set((state) => ({
          attendanceStatus: {
            ...state.attendanceStatus,
            [key]: value
          }
        })),

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
        }))
    }),
    {
      name: "user-storage",
    }
  )
);