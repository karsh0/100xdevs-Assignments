const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();
const {User, Todo} = require('../database')

// todo Routes
router.post('/', userMiddleware ,async(req, res) => {
    const {title, content} = req.body;
    await Todo.create({
        title,content
    })
    res.json({message:"post created"})
});

router.put('/', userMiddleware, async(req, res) => {
    const {title, content} = req.body;
    console.log(req.user)
    await Todo.findOneAndUpdate({
        title,content,
    })
    res.json({message:"post updated"})
});

router.delete('/', userMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', userMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/', userMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', userMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;