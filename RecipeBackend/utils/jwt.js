const jwt = require("jsonwebtoken");
const jwtSecret = "chef";

const generateToken = (payload) => {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
    return token;
}

const verifyToken = (token) => {
    const payload = jwt.verify(token, jwtSecret);
    console.log(payload);
    return payload;
}

module.exports = { generateToken, verifyToken };