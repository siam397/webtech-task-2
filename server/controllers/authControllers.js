const SHA256 = require("crypto-js/sha256");
const insertCommands = require('../db/dbCommands/insertCommands')
const queryCommands = require('../db/dbCommands/queryCommands')
const jwt = require("jsonwebtoken");

const { validationResult } = require('express-validator');
module.exports.signup = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const username = req.body.username;
    const hashedPassword = SHA256(req.body.password).toString();
    const email = req.body.email;

    const user = await (await queryCommands.getUserByEmail(email))['0']
    if (user) {
        return res.json({
            statusCode: 400,
            message: "Email exists!"
        })
    }

    const result = await (await insertCommands.insertUser(username, email, hashedPassword))['0']

    const token = generateToken({
        id: result.id,
        username: result.username,
        email: result.email
    })

    return res.json({
        accessToken: token
    })

}

module.exports.login = async (req, res) => {

    const email = req.body.email;
    const password = SHA256(req.body.password).toString();

    const user = await (await queryCommands.getUserByEmail(email))['0']

    if (user && user.password === password) {
        const token = generateToken({
            id: user.id,
            username: user.username,
            email: user.email
        })

        return res.json({
            accessToken: token
        })
    }

    if (!user) return res.json({
        statusCode: 400,
        message: "User doesn't exist"
    })

    return res.json({
        statusCode: 400,
        message: "Password error"
    })

}


const generateToken = (user) => {
    return jwt.sign(user, process.env.ACCESSKEY, { expiresIn: "60d" });
};