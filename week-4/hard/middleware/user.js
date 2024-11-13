const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

async function userMiddleware(req, res, next) {
    const token = req.headers.token
    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        console.log(token)
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET || 'random');
        req.user = verifiedUser;
        console.log(req.user)
        next();
    } catch (error) {
       res.json({error})
    }
}

module.exports = userMiddleware;
