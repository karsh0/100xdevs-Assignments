import mongoose, { model, Schema } from "mongoose";

export async function dbConnect(){
    const MONGO_URI = "mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/todo-assignment";
    const res = await mongoose.connect(MONGO_URI);
    if(res){
        console.log("db connected and listening at 3000")
        return;
    }
    else{
        console.log("unable to connect to database")
    }
}

const userSchema = new Schema({
    username: String,
    password: String
})

const todoSchema = new Schema({
    userId: [{type: mongoose.Types.ObjectId, ref:"User"}],
    title: String,
    description: String,
    isCompleted: Boolean
})

export const userModel = model("User", userSchema)
export const todoModel = model("Todo", todoSchema)

export const JWT_SECRET = "123123"
