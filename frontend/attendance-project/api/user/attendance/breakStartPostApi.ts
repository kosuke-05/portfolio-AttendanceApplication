"use client"

import { fetchWithAuth } from "../fetchWithAuth"

// 休憩開始のAPI通信
export const BreakStartPostApi = async () => {
  const res = await fetchWithAuth("http://127.0.0.1:3001/attendance/break_start", {
    method: "POST"
  });

  return res.json();
};