import { breakStartRepository } from "../../repository/attendance/breakStartRepository.js";


export const breakStartService = async () => {
  // 現在時刻の生成
  const now = new Date();
  const time = now.toTimeString().split(" ")[0];

  const result = breakStartRepository(time!);

  return {
    break_start: result
  }
};