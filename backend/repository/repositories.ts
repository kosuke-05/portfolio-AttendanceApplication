import { pool } from "../db/db.js";
import type { UserInputType } from "../types/user/userType.js";

// DB操作を記述
export const userPost = async (data: Omit<UserInputType, "id">) => {
  return await pool.query(
    "INSERT INTO users (name, departmentName, mailAddress, password) values ($1, $2, $3) RETURNING *",
    [data.name, data.departmentName, data.mailAddress, data.password]
  );
};