import express from "express";
import routes from "../route";
import { videohome, videosearch } from "../controller/videocontroller";
import { login, logout, getjoin, postjoin } from "../controller/usercontroller";

const globalRouter = express.Router();

globalRouter.get(routes.join,getjoin);
globalRouter.post(routes.join,postjoin);



globalRouter.get(routes.home,videohome);
globalRouter.get(routes.search,videosearch);
globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);

export default globalRouter;