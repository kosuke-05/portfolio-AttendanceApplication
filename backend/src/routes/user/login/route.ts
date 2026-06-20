import { Router } from "express";
import { UserLoginController } from "../../../controllers/user/login/userLoginController.js";


const UserLoginRouter = Router();

UserLoginRouter.post("/", UserLoginController);

export default UserLoginRouter;