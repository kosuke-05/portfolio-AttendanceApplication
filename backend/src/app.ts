import express from "express";
import cors from "cors";
import userRouter from "./routes/user/route.js";
import workFinishRouter from "./routes/attendance/workFinishRoute.js";
import workStartRouter from "./routes/attendance/workStartRoute.js";
import breakStartRouter from "./routes/attendance/breakStartRoute.js";
import lateWorkStartRouter from "./routes/late/workStartRoute.js";
import lateWorkFinishRouter from "./routes/late/workFinishRoute.js";

// Expressの設定ファイル
export const app = express();

// 別ポート番号からの通信を許可
app.use(cors());

// JSON形式に変換
app.use(express.json());

// ルーティング定義
app.use("/user/post", userRouter);
app.use("/attendance/work_start", workStartRouter);
app.use("/attendance/work_finish", workFinishRouter);
app.use("/attendance/break_start", breakStartRouter);
app.use("/attendance/work_start/late", lateWorkStartRouter);
app.use("/attendance/work_finish/late", lateWorkFinishRouter);

export default app;