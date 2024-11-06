const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();
const {User, Todo} = require('../database')

// todo Routes
router.post('/', async(req, res) => {
    const {title, content} = req.body;
    await Todo.create({
        title,content
    })
    res.json({message:"post created"})
});

router.put('/', adminMiddleware, async(req, res) => {
    const {title, content} = req.body;
    console.log(req.user)
    await Todo.findOneAndUpdate({
        title,content,
    })
    res.json({message:"post created"})
});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
});

module.exports = router;