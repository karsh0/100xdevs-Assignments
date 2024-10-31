const express = require('express')
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', (req,res) =>{
    res.render('index')
})

app.post('/register', async (req,res) =>{
    const { email, username, name, password, age } = req.body;

    let user =  await userModel.findOne({email});
    if(user) return res.status(500).send('User already exists');

    const hashedPassword = bcrypt.hash(password,4);
    await userModel.create({
        username,
        name,
        email,
        age,
        password:hashedPassword
    })

})

app.listen(3000)