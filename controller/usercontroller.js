import routes from "../route";

//join
export const getjoin = (req,res) => {
    return res.render('join',{ pageTitle : ' join' })
    };
export const postjoin = (req,res) => {
    //const {name,email,password,password2} = req.body;
    const {
        body:{name,email,password,password2}
        } = req;
    res.status(isequal(password,password2) ? 200 : 400);
    return isequal(password,password2) 
    //To do:Log user in
    //To do:register User
    ? res.render('join',{ pageTitle : ' join' }) 
    : res.redirect(routes.home);
    };
    
//login
export const getlogin = (req,res) => {
    
    return res.render('login',{ pageTitle : ' login' })
};
export const postlogin = (req,res) => {
    
    return res.redirect(routes.home);
};


export const logout = (req,res) => {
    //To do: Processs log out    
    return res.redirect(routes.home);
};
export const users = (req,res) => res.render('users',{ pageTitle : ' users' });
export const user_detail = (req,res) => {
    return res.render('user_detail',{ pageTitle : 'detail' })};
export const user_edit = (req,res) => {
    return res.render('edit_profile',{ pageTitle : 'edit_profile' })
    }
export const change_password = (req,res) => {
    
    return res.render('change_password',{ pageTitle : ' change password' })
    };

const isequal = (a,b) => a===b;