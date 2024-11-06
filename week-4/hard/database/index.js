const mongoose = require('mongoose');
const env = require('dotenv')
env.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Define schemas

const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String
});

const TodoSchema = new mongoose.Schema({
    title:String,
    content:String
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}