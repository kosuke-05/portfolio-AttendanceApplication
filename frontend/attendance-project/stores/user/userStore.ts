"use client"

import { UserStoreType } from "@/types/store/userStoreType";
import { UserTypeAddId } from "@/types/user/userType";
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

      attendanceTime: {
        work_start: "",
        work_finish: "",
        break_start: "",
        break_finish: ""
      }
    }),
    {
      name: "user-storage",
    }
  )
);