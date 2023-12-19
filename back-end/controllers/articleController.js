const Article = require('../models/articleModel')
const User = require('../models/userModel')
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

exports.getAllArticle = async (req, res, next) => {
    try {
        const data = await Article.find()
        res.status(200).json({
            status: "success",
            data: data
        });
    } catch (err) {
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
        let data =
            await Article.findById(id)

        const user = await User.findById(data.ID_author);
        let article = {
            ...data
        }._doc;
        article.author_name = user.FullName
        article.imageAuthor = user.Image_Avatar

        for (const comment of article.comments) {
            const user = await User.findById(comment.id_user)
            comment.username = user.FullName
            comment.image = user.Image_Avatar;
        }

        res.status(200).json({
            status: "success",
            data: article
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            msg: err
        })
    }
    next();
}

exports.createArticle = async (req, res, next) => {
    try {
        const {
            Title,
            Detail,
            Category,
            ID_author
        } = req.body;
        const file = req.files.image;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "images"
        })

        const article = {
            Title: Title,
            Detail: Detail,
            Category: [Category],
            posted_time: new Date(),
            ID_author: ID_author,
            Image: result.url
        }

        await Article.create(article);

        res.status(201).json({
            status: 'success',
            data: {
                article: article
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
    } catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.getTops = async (req, res, next) => {
    try {
        const name = req.params.name;
        let datas = '';
        const limit = req.query.limit || 12;
        console.log(limit)
        if (name == 'views') {
            datas = await Article.find({
                    view: {
                        $exists: true,
                        $gt: 0
                    }
                })
                .sort({
                    view: -1
                }).limit(limit);
        } else if (name == 'likes') {
            datas = await Article.find({
                likes: {
                    $exists: true
                }
            }).sort({
                likes: -1
            }).limit(limit);
        } else if (name == 'priority') {
            datas = await Article.find({
                isPriority: true
            }).limit(limit)
        } else if (name == 'timer') {
            datas = await Article.find().sort({
                posted_time: -1
            }).limit(limit)
        }
        // console.log(datas)/
        const result = await Promise.all(datas.map(async (data) => {
            const user = await User.findById(data.ID_author);
            // the cause is articles do not have attribute is imageAuthor then i must be parse them
            let aritcle = {
                ...data
            }._doc;
            aritcle.ID_author = user.FullName
            aritcle.imageAuthor = user.Image_Avatar
            return aritcle
        }))

        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.getCategory = async (req, res, next) => {
    try {
        const data = await Article.find({
            Category: {
                $in: [req.params.name]
            }
        }).exec();

        const user = await User.findById(data.ID_author);
        let article = {
            ...data
        }._doc;
        article.ID_author = user.FullName
        article.imageAuthor = user.Image_Avatar

        res.status(200).json({
            status: 'success',
            data: article
        })
    } catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.getPagination = async (req, res, next) => {
    const query = req.query
    const skip = (query.page - 1) * query.limit
    try {
        const datas = await Article.find({
                Category: {
                    $in: [query.category]
                }
            })
            .skip(skip)
            .limit(query.limit)
            .exec()

        const result = await Promise.all(datas.map(async (data) => {
            const user = await User.findById(data.ID_author);
            // the cause is articles do not have attribute is imageAuthor then i must be parse them
            let aritcle = {
                ...data
            }._doc;
            aritcle.ID_author = user.FullName
            aritcle.imageAuthor = user.Image_Avatar
            return aritcle
        }))

        res.status(200).json({
            status: 'success',
            data: result
        })

    } catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}


exports.deleteArticle = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the user by ID and delete it
        // const deletedArticle = await Article.deleteOne({
        //     _id
        // });
        const deletedUser = await Article.deleteMany();

        if (!deletedArticle) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }

        res.status(201).json({
            status: 'success',
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}


exports.SearchArticle = async (req, res, next) => {
    try {
        const tempsearchString = req.params.searchString;

        const searchString = tempsearchString.replace(/\+/g, ' ');

        const datas = await Article.find({
            $or: [{
                    Title: {
                        $regex: searchString,
                        $options: 'i'
                    }
                }, // Search by Title
                {
                    Category: {
                        $in: [searchString]
                    }
                } // Search by Category
            ]
        });

        const articles = await Promise.all(datas.map(async (data) => {
            const user = await User.findById(data.ID_author);
            let article = {
                ...data
            }._doc;
            article.ID_author = user.FullName;
            article.imageAuthor = user.Image_Avatar;
            return article;
        }));

        res.status(200).json({
            status: "success",
            data: articles
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            msg: err
        })
    }
    next();
}


exports.addComment = async (req, res, next) => {
    try {
        const id_article = req.params.id;
        const {
            id_user,
            content
        } = req.body;

        const articles = await Article.findById(id_article);

        // If the article with the specified ID is not found, return an error response
        if (!articles) {
            return res.status(404).json({
                status: 'fail',
                message: 'Article not found'
            });
        }


        const newComment = {
            id_user: id_user,
            content: content
        };


        articles.comments.push(newComment);


        const update = await Article.findByIdAndUpdate(id_article, articles, {
            new: true
        })
        res.status(201).json({
            status: 'success',
            data: update
        })
    } catch (err) {
        res.status(500).send({
            status: "error",
            msg: err
        })
    }
    next();
}

exports.setPriority = async (req, res) => {
    try {
        const idPriorityArticles = req.body.id.split(",");
        console.log(idPriorityArticles)
        await Article.updateMany(
            {},
            { $set: { isPriority: false } }
        );
        await Article.updateMany(
            { _id: { $in: idPriorityArticles } },
            { $set: { isPriority: true } }
        );
        res.status(200).json({
            status: "success"
        })
    }
    catch (err) {
        res.status(403).json({
            status: "fail"
        })
    }
}