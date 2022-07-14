const express = require('express')
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authControllers')
router.post('/signup',
    body('username').notEmpty().withMessage("username cannot be empty"),
    body('email').notEmpty().withMessage('Email cannot be empty').isEmail().withMessage("Not a valid email"),
    body('password').isLength({ min: 5 }).withMessage("password too short").notEmpty().withMessage("cannot be empty")
    , authController.signup)

router.post("/login", authController.login)

module.exports = router