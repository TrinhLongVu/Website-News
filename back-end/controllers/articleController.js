const Article = require('../models/articleModel')
const fs = require('fs');

exports.getAllArticle = async (req, res, next) => {
    try {
        const data = await Article.find()
        res.status(200).json({
            status: "success",
            data: data
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            msg: err
        })
    }
    next();
}

exports.getArticle = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Article.findById(id);
        res.status(200).json({
            status: "success",
            data: data
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            msg: err
        })
    }
    next();
}

exports.createArticle = async (req, res, next) => {
    try {
        const newArticle = await Article.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                article: newArticle
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.createAllArticle = async (req, res, next) => {
    try {
        const filePath = `${__dirname}data\\article.json`.replace('controllers', '');
        const articles = JSON.parse(fs.readFileSync(filePath, 'utf-8')).article;
        for (const article of articles) {
            article.posted_time = new Date();
            await Article.create(article);
        }
        res.status(201).json({
            status: 'success'
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }

}

exports.updateArticle = async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = await Article.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(201).json({
            status: 'success',
            data: update
        })
    }
    catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.getTop5Views = async (req, res, next) => {
    try {
        const data = await Article.find({ view: { $exists: true } }).sort({ view: -1 }).limit(5);
        res.status(200).json({
            status: 'success',
            data: data
        })
    }
    catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.getCategory = async (req, res, next) => {
    try {
        const scienceArticles = await Article.find({ Category: { $in: [req.params.name] } }).exec();
        res.status(200).json({
            status: 'success',
            data: scienceArticles
        })
    }
    catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.deleteArticle = (req, res, next) => {
    res.status(500).send({
        status: "error",
    })
    next();
}