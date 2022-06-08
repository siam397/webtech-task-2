const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

//Middleware for protecting routes from non logged in users
exports.protectRoute = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return;
    jwt.verify(token, process.env.ACCESSKEY, (err, user) => {
        if (err) return;
        req.user = user;
        next();
    });
};