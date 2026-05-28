import { pool } from "../../../db/db.js"


export const breakStartRepository = (time: string) => {
  return pool.query(
    "INSERT INTO attendance (break_start) values ($1) RETURNING * ",
    [time]
  )
};