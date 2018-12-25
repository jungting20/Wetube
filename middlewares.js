import routes from "./route";

//미들웨어들 쳐 넣어 두는 곳
export const localsMiddlewares = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    next();
    //미들웨어 사이에 있으니 next를 해주는듯?req전달...이라는데
    //local에서 사용할 객체를 설정하는거임 siteName이라는 속성은 임의로 지정
    //오 이렇게하면 #{siteName로 사용 할 수 있음 미들웨어로 등록해줬으니까}
}