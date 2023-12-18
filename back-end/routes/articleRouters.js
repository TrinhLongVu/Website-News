const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController')

router
    .route('/')
    .get(articleController.getAllArticle)
    .post(articleController.createArticle)

router
    .route('/create/createAll')
    .post(articleController.createAllArticle)

router
    .route('/category/:name')
    .get(articleController.getCategory)

router
    .route('/top/:name')
    .get(articleController.getTops)

router
    .route('/page/pagination')
    .get(articleController.getPagination)

router
    .route('/:id')
    .get(articleController.getArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle)
    .post(articleController.addComment)

router
    .route('/search/:searchString')  // Note: if searchString have multiple words, convert to "word1+word2+..." .concatnate words with a "+" sign, must not have "space"(" ") in searchString
    .get(articleController.SearchArticle)

module.exports = router;