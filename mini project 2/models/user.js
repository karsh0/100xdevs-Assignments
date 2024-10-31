const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/SheriyansPost");

const userSchema = mongoose.Schema({
    username: String,
    name:String,
    age:Number,
    email:String,
    password:String
})

module.exports = mongoose.model('user',userSchema);