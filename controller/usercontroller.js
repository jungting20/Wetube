export const join = (req,res) => res.render('join',{ pageTitle : ' join' });
export const login = (req,res) => res.render('login',{ pageTitle : ' login' });
export const logout = (req,res) => res.render('logout',{ pageTitle : ' logout' });
export const users = (req,res) => res.render('users',{ pageTitle : ' users' });
export const user_detail = (req,res) => res.render('user_detail',{ pageTitle : ' detail' });
export const user_edit = (req,res) => res.render('edit_profile',{ pageTitle : 'edit_profile' })
export const change_password = (req,res) => res.render('change_password',{ pageTitle : ' change password' });