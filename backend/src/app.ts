import express from "express";
import cors from "cors";
import userRouter from "./routes/user/route.js";
import attendanceRouter from "./routes/attendance/route.js";

// Expressの設定ファイル
export const app = express();

// 別ポート番号からの通信を許可
app.use(cors());

// JSON形式に変換
app.use(express.json());

// ルーティング定義
app.use("/user/post", userRouter);
app.use("/attendance/work_start", attendanceRouter);
app.use("/attendance/work_finish", attendanceRouter);

export default app;