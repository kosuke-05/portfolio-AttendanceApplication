import { pool } from "../../../db/db.js";

// 出勤時の処理
export const workStartPostRepository = (time: string, date: string) => {
  return pool.query(
    "INSERT INTO attendance (work_start, create_date) values ($1, $2) RETURNING * ",
    [time, date]
  );
};

// 退勤時の処理
export const workFinishPostRepository = (time: string) => {
  return pool.query(
    "INSERT INTO attendance (work_finish) values ($1) RETURNING * ",
    [time]
  );
};