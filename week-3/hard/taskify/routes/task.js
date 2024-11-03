const express = require('express')
const taskRouter = express.Router();

taskRouter.get('/',(req,res)=>{
    res.send('createTask')
})

module.exports = {taskRouter};