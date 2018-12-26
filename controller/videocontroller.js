export const videohome = (req,res) => res.render("home",{ pageTitle : 'Home' });
export const videosearch = (req,res) => res.render("search",{ pageTitle : 'Search' });
export const videos = (req,res) => res.render('videos',{ pageTitle : 'videos' });
export const delete_video = (req,res) => res.render('delete_video',{ pageTitle : 'delete_video' });
export const edit_video = (req,res) => res.render('edit_video',{ pageTitle : 'edit_video' });
export const videos_detail = (req,res) => res.render('videos_detail',{ pageTitle : 'videos_detail' });
export const upload = (req,res) => res.render('upload',{ pageTitle : 'upload' });

