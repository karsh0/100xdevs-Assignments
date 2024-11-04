const express = require('express')
const userRouter = express.Router();
const { TaskModel } = require('../db');


userRouter.get('/', async (req,res)=>{
    const tasks = await TaskModel.find({});
    res.render('index',{tasks})
})


module.exports = {userRouter};