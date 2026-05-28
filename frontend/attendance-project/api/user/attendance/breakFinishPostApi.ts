"use client"

import { fetchWithAuth } from "../fetchWithAuth"

export const BreakFinishPostApi = async () => {
  const res = await fetchWithAuth("http://127.0.0.1:3001/attendance/break_finish", {
    method: "POST"
  });

  return res.json();
};