import pkg from "pg";
const { Pool } = pkg;

// DBとの連携
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "attendanceapplication",
  password: "practiceSQL",
  port: 5433
});