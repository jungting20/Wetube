//const express = require('express');
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
import userRouter  from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import globalRouter from "./router/globalRouter";
const app =express();
//const PORT = 4000;

/* const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
} */
const handlehome = (req,res) => res.send('hello world');
const handleProfile = (req,res) => res.send('profile');

app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}));//폼에서 넘어온 데이터 받으려면 설치 필수
app.use(bodyparser.json());//폼에서 넘어온 데이터 받으려면 설치 필수
app.use(helmet());//보안
app.use(logger("dev"));
//middle를 둘수있다 그러니까 중간에 실행하는거
//app.get('/',betweenHome,handlehome);
app.get('/',handlehome);
app.get('/profile',handleProfile);
app.use('/',globalRouter);
app.use('/user',userRouter);
app.use('/video',videoRouter);
//app.listen(PORT,handleListening);
export default app;



