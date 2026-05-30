import { breakFinishRepository } from "../../repository/attendance/breakFinishRepository.js";


export const breakFinishService = () => {
  // 現在時刻の生成
  const now = new Date();
  const time = now.toTimeString().split(" ")[0];

  const result = breakFinishRepository(time!);

  return {
    break_finish: result
  }
};