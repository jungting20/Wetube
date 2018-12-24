import express from "express";
import route from "../route";
const userRouter = express.Router();
userRouter.get(route.user,(req,res) => res.send('user users'));
userRouter.get(route.user_detail,(req,res) => res.send('user detail'));
userRouter.get(route.edit_profile,(req,res) => res.send('user edit'));
userRouter.get(route.change_password,(req,res) => res.send('user change password'));

export default userRouter;



