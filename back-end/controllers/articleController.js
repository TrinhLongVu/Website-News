const Article = require('../models/articleModel')

exports.getAllArticle = (req, res, next) => {
    res.status(200).json({
        status: "success",
        data: [{
            id: 1,
            title: 'Nguyen An Nam'
        }]
    });
    next();
}

exports.getArticle = (req, res, next) => {
    res.status(500).send({
        status: "error",
    })
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
    } catch(err) {
        res.status(400).json({
            status: "fail",
            msg: err 
        })
    }

}

exports.updateArticle = (req, res, next) => {
    res.status(500).send({
        status: "error",
    })
    next();
}

exports.deleteArticle = (req, res, next) => {
    res.status(500).send({
        status: "error",
    })
    next();
}