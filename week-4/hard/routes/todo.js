const {Router} = require('express')
const userMiddleware = require("../middleware/user");
const router = Router();
const {Todo, User} = require('../database/index') 

// todo Routes
router.post('/', userMiddleware ,async(req, res) => {
    const {title, content} = req.body;
    await Todo.create({
        title,content, userId: req.user.userId
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

router.delete('/', userMiddleware, async(req, res) => {
    await Todo.deleteMany({})
    res.json({message:"all post have been deleted"})
});

router.delete('/:id', userMiddleware, async(req, res) => {
    const todoId = req.params.id;
    await Todo.findOneAndDelete({_id: todoId})
    res.json({message:"post deleted"})
});


router.get('/', userMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', userMiddleware, async(req, res) => {
    const todoId = req.params.id;
    const todos = await Todo.findOne({_id: todoId})
    res.json({
        todos
    })
});

module.exports = router;