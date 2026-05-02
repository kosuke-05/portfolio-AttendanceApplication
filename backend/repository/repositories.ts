import { pool } from "../db/db.js";
import type { UserInputType } from "../types/user/userType.js";

// DB操作を記述
export const userPostRepository = async (data: Omit<UserInputType, "id">) => {
  return await pool.query(
    "INSERT INTO users (name, department_name, mail_address, pass_word) values ($1, $2, $3, $4) RETURNING *",
    [data.name, data.departmentName, data.mailAddress, data.password]
  );
};