import jwt from "jsonwebtoken"
import { JWT_SECRET, userModel } from "../db/index.js";

export async function userMiddleware(req,res,next){
    const token = req.headers.token;

    const user = jwt.verify(token, JWT_SECRET);
    const VerifiedUser = await userModel.findOne({
        _id: user.userId
    })
    console.log(user, VerifiedUser)
   
    if(user && VerifiedUser){
        req.userId = VerifiedUser._id;
        return next()
    }
    return res.json({message:"something broke in middleware"})
}