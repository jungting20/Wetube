import express from "express";

const userRouter = express.Router();

userRouter.get('/',(res,req) => req.send('user index'));
userRouter.get('/edit',(res,req) => req.send('user edit'));
userRouter.get('/password',(res,req) => req.send('user password'));

export default userRouter;



