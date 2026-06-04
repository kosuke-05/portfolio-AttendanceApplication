import { pool } from "../../../db/db.js"


export const lateWorkFinishRepository = (lateReason: string) => {
  return pool.query(
    "INSERT INTO attendance (work_finish_memo) values ($1) RETURNING *",
    [lateReason]
  )
};