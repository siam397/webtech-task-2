const express = require('express')
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController')


router.get('/currentUser', userController.getCurrentUserProfile)

router.route('/:userId')
    .get(userController.getUserById)
    .put(
        body('email').isEmail().withMessage("Not a valid email"),
        // body('password').isLength({ min: 5 }).withMessage("password too short"),
        userController.updateUser)


module.exports = router
