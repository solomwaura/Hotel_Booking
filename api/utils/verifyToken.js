import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token;
    if(!token){
        next(createError(401,"Youre not authenticated"))
    }

    jwt.verify(token,process.env.JWT,(err,user) =>{
        if(err) return next(createError(403,"Token is not valid"));
        req.user = user;
        next()
    })
};

export const checkUser = (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){ 
            next()
        }else{
            if(err) return next(createError(403,"youre not authorized!"))
        }
    })
}

export const checkIsAdmin = (req,res,next) =>{
    verifyToken(req,res,next, ()=>{
        if( req.user.isAdmin){ 
            next()
        }else{
            if(err) return next(createError(403,"youre not authorized!"))
        }
    })
};