const mongoose = require('mongoose');
const env = require('dotenv')
env.config()
mongoose.connect(process.env.MONGO_URL)

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    level: { type: String, required: true }
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = { TaskModel };