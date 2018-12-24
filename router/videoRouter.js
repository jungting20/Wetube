import express from "express";
import route from "../route";

const videoRouter = express.Router();

videoRouter.get(route.videos,(req,res) => res.send('videos'));
videoRouter.get(route.delete_video,(req,res) => res.send('videos delete_video'));
videoRouter.get(route.edit_video,(req,res) => res.send('videos edit_video'));
videoRouter.get(route.videos_detail,(req,res) => res.send('videos detail'));
videoRouter.get(route.upload,(req,res) => res.send('videos upload'));

export default videoRouter;