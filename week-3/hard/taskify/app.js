const express = require('express');
const app = express();
const { userRouter } = require('./routes/user');
const taskRouter = require('./routes/task');
require('./db'); 

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/todo', userRouter);
app.use('/task', taskRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
