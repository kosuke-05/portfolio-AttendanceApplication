"use client"

import { fetchWithAuth } from "../user/fetchWithAuth"

export const WorkStartPostApi = async (lateReason: string) => {
  const res = await fetchWithAuth("http://127.0.0.1:3001/attendance/work_start/late", {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(lateReason)
  });

  return res.json();
};