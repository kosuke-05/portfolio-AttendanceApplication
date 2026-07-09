import { workFinishRepository } from "../../repository/attendance/workFinishRepository.js";

export const workFinishService = async () => {
  // 日付の生成
  const now = new Date();
  const time = now.toTimeString().split(" ")[0];

  // 退勤時間（18時）を超えているかの判定
  const limit = new Date();
  limit.setHours(18, 0, 0, 0);
  const isLate = now > limit;

  // DB処理へ移行
  const result = await workFinishRepository(time!);

  console.log("デバッグ：service")

  return {
    attendance: result.rows[0],
    isLate
  };
};