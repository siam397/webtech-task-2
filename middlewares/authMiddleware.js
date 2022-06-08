const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

//Middleware for protecting routes from non logged in users
exports.protectRoute = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.json({ statusCode: 404, message: "Unauthorized" })
    jwt.verify(token, process.env.ACCESSKEY, (err, user) => {
        if (err) return res.json({ statusCode: 404, message: "Couldn't authenticate" })
        req.user = user;
        next();
    });
};