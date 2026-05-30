import { pool } from "../../../db/db.js"

export const breakFinishRepository = (time: string) => {

  return pool.query(
    "INSERT INTO attendance (break_finish) values ($1) RETURNING * ",
    [time]
  )
};