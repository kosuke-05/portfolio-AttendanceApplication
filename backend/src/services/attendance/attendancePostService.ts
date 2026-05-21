import { workFinishPostRepository, workStartPostRepository } from "../../repository/attendance/attendancePostRepository.js";

export const attendancePostService = async () => {
  // 現在時刻の取得
  const now = new Date();

  // 時刻のみ生成
  const time = now.toTimeString().split(" ")[0];

  // 日付のみ生成
  const date = `
    ${now.getFullYear()} - ${now.getMonth() + 1}
    - ${now.getDate()}`;

  /**
   * DB処理へ移行
   * ①出勤時の処理
   * ②退勤時の処理
   */
  await workStartPostRepository(time!, date);
  await workFinishPostRepository(time!);
};