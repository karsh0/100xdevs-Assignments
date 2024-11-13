const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Todo} = require('../database/index')
const jwt = require('jsonwebtoken')

// User Routes
router.post('/signup', async(req, res) => {
    const {email,username,password} = req.body;
    const user = await User.findOne({email: email.toString()})
    if(user){
        res.send("user already exists")
    }
    await User.create({
        email,username,password
    })
    res.json({
        message:"user createed successfully"
    })
});

router.post('/login',async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && password == user.password){
        const token = jwt.sign({userId: user._id.toString()}, process.env.JWT_SECRET);
        res.json({
            message:"login success",
            token
        })
    }
});

router.get('/todos', userMiddleware, async(req, res) => {
    console.log(req.user.userId)
    const todos = await Todo.find({userId: req.user.userId})
    res.json({
        todos
    })
});

router.post('/logout', userMiddleware, (req, res) => {
    const token = req.headers.token;
    res.setHeader('token','').json({
        message:"logout success",
        token
    })
});

module.exports = router