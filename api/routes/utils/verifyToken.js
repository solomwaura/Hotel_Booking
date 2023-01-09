import jwt from "jsonwebtoken";
import { createError } from "../utils/error";

export const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token;
    if(!token){
        next(createError(401,"Youre not authenticated"))
    }

    jwt.verify(token,process.env.JWT,(err,user) =>{
        if(err) return next(createError(403,"Token is not valid"));
    })
}