import { workFinishRepository } from "../../repository/attendance/workFinishRepository.js";

export const workFinishService = async () => {
  // 日付の生成
  const now = new Date();

  const time = now.toTimeString().split(" ")[0];

  // DB処理へ移行
  await workFinishRepository(time!);
};