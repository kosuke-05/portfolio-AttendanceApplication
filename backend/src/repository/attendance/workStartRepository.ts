import { pool } from "../../../db/db.js";

// 出勤時の処理
export const workStartRepository = (userId: number ,time: string, date: string) => {
  return pool.query(
    "INSERT INTO attendance (user_id, work_start, create_date) values ($1, $2, $3) RETURNING * ",
    [userId, time, date]
  );
};