const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

const { User } = require('../database');

async function userMiddleware(req, res, next) {
    const token = req.localStorage.getItem('token')

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        console.log(token)
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET || 'random');
        req.user = verifiedUser;
        next();
    } catch (error) {
       res.json({error})
    }
}

module.exports = userMiddleware;
