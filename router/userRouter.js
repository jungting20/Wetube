import express from "express";
import route from "../route";
import { users, user_detail, user_edit, change_password } from "../controller/usercontroller";
const userRouter = express.Router();

userRouter.get(route.user,users);
userRouter.get(route.edit_profile,user_edit);
userRouter.get(route.change_password,change_password);
userRouter.get(route.user_detail,user_detail);

export default userRouter;



