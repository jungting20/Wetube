//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users

const USER = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Videos
//:id 로하면 변수로 인식함

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    search:SEARCH,
    user:USER,
    user_detail:USER_DETAIL,
    edit_profile:EDIT_PROFILE ,
    change_password:CHANGE_PASSWORD,
    videos:VIDEOS,
    videos_detail:VIDEOS_DETAIL,
    edit_video:EDIT_VIDEO,
    delete_video:DELETE_VIDEO,
    upload:UPLOAD
}

export default routes;