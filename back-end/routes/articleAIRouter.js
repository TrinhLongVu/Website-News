const express = require('express');
const router = express.Router();

const articleAIController = require('../controllers/articleAIController')

router
    .route('/')
    .post(articleAIController.getArticle)

module.exports = router;