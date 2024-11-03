const express = require('express');
const app = express();
const {userRouter} = require('./routes/user');
const {taskRouter} = require('./routes/task');

app.set('view engine', 'ejs');

app.use('/task', userRouter)
app.use('/task', taskRouter)

app.listen(3000)