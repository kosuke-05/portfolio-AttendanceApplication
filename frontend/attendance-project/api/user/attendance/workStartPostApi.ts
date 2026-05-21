"use client"

import { fetchWithAuth } from "../fetchWithAuth"

// 出勤時のapi層
export const WorkStartPostApi = async () => {
  const res = await fetchWithAuth("http://127.0.0.1:3001/attendance/work_start", {
    method: "POST"
  });

  return res.json();
};