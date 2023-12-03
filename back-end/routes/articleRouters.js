const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController')

router
    .route('/')
    .get(articleController.getAllArticle)
    .post(articleController.createArticle)

router
    .route('create/createAll')
    .post(articleController.createAllArticle)

router
    .route('/top/getTop5Views')
    .get(articleController.getTop5Views)

router
    .route('/:id')
    .get(articleController.getArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle);


module.exports = router;