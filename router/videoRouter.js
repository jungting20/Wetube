import express from "express";
import route from "../route";
import { videos_home, delete_video, edit_video, videos_detail, upload } from "../controller/videocontroller";
const videoRouter = express.Router();
    
videoRouter.get(route.videos,videos_home);
videoRouter.get(route.delete_video,delete_video);
videoRouter.get(route.edit_video,edit_video);
videoRouter.get(route.upload,upload);
videoRouter.get(route.videos_detail,videos_detail);
export default videoRouter;