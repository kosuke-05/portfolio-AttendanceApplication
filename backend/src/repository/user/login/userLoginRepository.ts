import { pool } from "../../../../db/db.js";


export const UserLoginRepository = async () => {
  return pool.query(
    "INSERT INTO users "
  )
};