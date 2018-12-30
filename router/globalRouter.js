import express from "express";
import routes from "../route";
import { videohome, videosearch } from "../controller/videocontroller";
import { getlogin, logout, getjoin, postjoin, postlogin } from "../controller/usercontroller";

const globalRouter = express.Router();

//join
globalRouter.get(routes.join,getjoin);
globalRouter.post(routes.join,postjoin);

//login
globalRouter.get(routes.login,getlogin);
globalRouter.post(routes.login,postlogin);


globalRouter.get(routes.home,videohome);
globalRouter.get(routes.search,videosearch);
globalRouter.get(routes.logout,logout);

export default globalRouter;