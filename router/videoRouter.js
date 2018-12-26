import express from "express";
import route from "../route";
import { videos, delete_video, edit_video, videos_detail, upload } from "../controller/videocontroller";
const videoRouter = express.Router();
    
videoRouter.get(route.videos,videos);
videoRouter.get(route.delete_video,delete_video);
videoRouter.get(route.edit_video,edit_video);
videoRouter.get(route.videos_detail,videos_detail);
videoRouter.get(route.upload,upload);
export default videoRouter;