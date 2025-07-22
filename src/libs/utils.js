import jwt from 'jsonwebtoken';
export const generateToken = (id,res)=>{
    const token = jwt.sign({id},process.env.SECRET_KEY,{expiresIn:'1d'});
    res.cookie('jwt',token,{
        maxAge:1*24*60*60*1000, //ml second
        httpOnly:true, //for prevent xss attack
        sameSite:'strict', //CSRF attacks
        secure: process.env.NODE_ENV!=='development'
    })

    return token;
}