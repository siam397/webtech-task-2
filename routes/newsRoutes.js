const express = require('express')
const { body } = require('express-validator');
const newsController = require('../controllers/newsController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router();

router.post('/',
    body('title').notEmpty().withMessage("title cannot be empty"),
    body('content').notEmpty().withMessage('content cannot be empty'),
    newsController.createNews
)

router.get('/', newsController.getNews)

router.route('/:newsId')
    .get(newsController.getNewsById)
    .put(newsController.updateNews)
    .delete(newsController.deleteNews)

router.get('/user', newsController.getNewsOfCurrentUser)
router.get("/user/:userId", newsController.getNewsOfSingleUser)

module.exports = router