"use client"

import { fetchWithAuth } from "../fetchWithAuth";

// 退勤時のapi層
export const WorkFinishPostApi = async () => {
  // トークンが有効か否か確認
  const res = await fetchWithAuth("http://127.0.0.1:3001/attendance/work_finish", {
    method: "POST"
  });

  return res.json();
};