const jwt = require('jsonwebtoken');
const env = require('dotenv');
const { User } = require('../database');
env.config();

async function userMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifiedUser;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token", error: error.message });
    }
}

module.exports = userMiddleware;
