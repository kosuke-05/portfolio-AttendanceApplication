import { pool } from "../../../../db/db.js";

export const UserLoginRepository = async (mailAddress: string) => {
  return pool.query(
    "SELECT * FROM users WHERE mail_address = $1",
    [mailAddress]
  )
};