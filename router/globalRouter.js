import express from "express";
import routes from "../route";
import { videohome, videosearch } from "../controller/videocontroller";
import { join, login, logout } from "../controller/usercontroller";

const globalRouter = express.Router();

globalRouter.get(routes.home,videohome);
globalRouter.get(routes.search,videosearch);
globalRouter.get(routes.join,join);
globalRouter.get(routes.login,login);
globalRouter.get(routes.logout,logout);

export default globalRouter;