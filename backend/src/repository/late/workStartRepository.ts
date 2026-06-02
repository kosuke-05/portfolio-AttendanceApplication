import { pool } from "../../../db/db.js"

export const lateWorkStartRepository = (lateReason: string) => {
  return pool.query(
    "INSERT INTO attendance (work_start_memo) values ($1) RETURNING * ",
    [lateReason]
  )
};