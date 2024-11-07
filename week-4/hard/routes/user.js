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
        const token = jwt.sign({email}, process.env.JWT_SECRET);
        res.json({
            message:"login success",
            token
        })
    }
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
    res.json({message:"todos"})
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router