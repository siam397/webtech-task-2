const express = require('express')
const { body } = require('express-validator');
const blogController = require('../controllers/blogController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router();

router.post('/',
    body('title').notEmpty().withMessage("title cannot be empty"),
    body('content').notEmpty().withMessage('content cannot be empty'),
    blogController.createBlogs
)

router.get('/', blogController.getBlogs)

router.get('/user', blogController.getBlogsOfCurrentUser)
router.route('/:blogsId')
    .get(blogController.getBlogsById)
    .put(blogController.updateBlogs)
    .delete(blogController.deleteBlogs)

router.get("/user/:userId", blogController.getBlogsOfSingleUser)

module.exports = router