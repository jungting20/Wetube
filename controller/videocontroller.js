import { videos } from "../db"

export const videohome = (req,res) => {
    return res.render("home",{ pageTitle : 'Home' ,videos});
    };
export const videosearch = (req,res) => {
    const { query: { term:searchingBy }} = req;
    return res.render("search",
    { pageTitle : 'Search' , searchingBy })
}
export const videos_home = (req,res) => res.render('videos',{ pageTitle : 'videos' });
export const delete_video = (req,res) => res.render('delete_video',{ pageTitle : 'delete_video' });
export const edit_video = (req,res) => res.render('edit_video',{ pageTitle : 'edit_video' });
export const videos_detail = (req,res) => res.render('videos_detail',{ pageTitle : 'videos_detail' });
export const upload = (req,res) => res.render('upload',{ pageTitle : 'upload' });

