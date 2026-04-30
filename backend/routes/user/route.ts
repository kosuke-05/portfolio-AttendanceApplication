import { Router } from "express";
import { userPostController } from "../../controllers/user/postController.js";

// ルーティング
const router = Router();

router.post("/", userPostController);

export default router;