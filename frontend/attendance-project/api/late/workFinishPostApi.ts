import { LateType } from "@/types/top/topTypes";
import { fetchWithAuth } from "../user/fetchWithAuth";

export const LateWorkFinishPostApi = async (lateReason: LateType) => {
  const res = await fetchWithAuth("http://127.0.0.1:3001/attendance/work_finish/late", {
    method: "POST",
    headers: { "Content-Type" : "application/json"},
    body: JSON.stringify(lateReason)
  });

  return res.json();
};