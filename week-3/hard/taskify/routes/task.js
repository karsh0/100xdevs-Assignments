const express = require('express');
const { TaskModel } = require('../db');
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
    res.render('createTask');
});

taskRouter.post('/register', async (req, res) => {
    const { title, content, level } = req.body;
    try {
        await TaskModel.create({ title, content, level });
        res.redirect('/todo');
    } catch (error) {
        console.error("Error saving task:", error);
        res.status(500).send("Failed to save task");
    }
});

module.exports = taskRouter;
