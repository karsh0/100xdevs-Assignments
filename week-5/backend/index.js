import express from "express"
import { dbConnect, JWT_SECRET } from "./db/index.js";
import {userModel, todoModel} from './db/index.js'
import jwt from 'jsonwebtoken'
import { userMiddleware } from "./middleware/user.js";
const app = express();

app.use(express.json())
dbConnect()

app.get('/api', (req,res)=>{
    res.send("Backend active")
})

app.post('/api/signup', async(req,res)=>{
    const {username, password} = req.body;

    await userModel.create({
        username, password
    })
    res.json({
        message:"user created successfully"
    })
})

app.post('/api/signin', async(req,res)=>{
    const {username, password} = req.body;

    const user = await userModel.findOne({
        username, password
    })
    const token = jwt.sign({userId: user._id.toString()},JWT_SECRET);
    res.setHeader('token',token)

    return res.json({
        message:"user signin successfully",
        token
    })
})

app.get('/dashboard', userMiddleware ,async(req,res)=>{
    const user = await userModel.findOne({
        _id: req.userId
    })
    res.json({
        "user": user
    })
})



app.listen(3000)