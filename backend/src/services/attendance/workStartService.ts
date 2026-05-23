import { workStartRepository } from "../../repository/attendance/workStartRepository.js";

export const workStartService = async (userId: number) => {
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
   * ②今回insertされたデータが左辺に代入される
   */
  const result = await workStartRepository(userId, time!, date);

  // 登録したデータを返す
  return result.rows[0];
};