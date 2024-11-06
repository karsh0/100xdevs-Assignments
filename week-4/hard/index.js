const express = require("express");
const userRoute = require('./routes/user')
const todoRoute = require('./routes/todo')
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/user', userRoute)
app.use('/todo', todoRoute)

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

