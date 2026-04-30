import express from "express";
import cors from "cors";
import router from "../routes/user/route.js";

// Expressの設定ファイル
export const app = express();

// 別ポート番号からの通信を許可
app.use(cors());

// JSON形式に変換
app.use(express.json());

// ルーティング定義
app.use("/api/user/post", router);

export default app;