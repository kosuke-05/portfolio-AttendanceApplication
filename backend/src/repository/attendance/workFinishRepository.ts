import { pool } from "../../../db/db.js"

export const workFinishRepository = (time: string) => {
  return pool.query(
    "INSERT INTO attendance (work_finish) values ($1) RETURNING * ",
    [time]
  );
};