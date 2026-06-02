import { Router } from "express";
import { lateWorkStartController } from "../../controllers/late/workStartController.js";


const lateWorkStartRouter = Router();

lateWorkStartRouter.post("/", lateWorkStartController);

export default lateWorkStartRouter;