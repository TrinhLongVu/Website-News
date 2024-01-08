const Article = require('../models/articleModel')
const User = require('../models/userModel')
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

exports.getAllArticle = async (req, res, next) => {
    try {
        const datas = await Article.find()

        const result = await Promise.all(datas.map(async (data) => {
            const user = await User.findById(data.ID_author);

            // the cause is articles do not have attribute is imageAuthor then i must be parse them
            let article = {
                ...data
            }._doc;
            article.nameAuthor = user.FullName
            article.imageAuthor = user.Image_Avatar
            return article
        }))

        res.status(200).json({
            status: "success",
            data: result
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
        let data = await Article.findById(id)
        data.view = data.view + 1;
        await Article.findByIdAndUpdate(id, data, {
            new: true
        })

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

        // use them in the 
        // const idwriter = ["657b1c5297b5b4de8aadced5","657b1c5297b5b4de8aadced8","657b1c5297b5b4de8aadcedb","657b1c5297b5b4de8aadcede","657b1c5397b5b4de8aadcee1","657b1c5397b5b4de8aadcee4","657b1c5397b5b4de8aadcee7","657b1c5397b5b4de8aadceea","657b1c5397b5b4de8aadceed","657b1c5397b5b4de8aadcef0","657b1c5397b5b4de8aadcef6"]
        // const idReader = ["657b1c5297b5b4de8aadced5","657b1c5297b5b4de8aadced8","657b1c5297b5b4de8aadcedb","657b1c5297b5b4de8aadcede","657b1c5397b5b4de8aadcee1","657b1c5397b5b4de8aadcee4","657b1c5397b5b4de8aadcee7","657b1c5397b5b4de8aadceea","657b1c5397b5b4de8aadceed","657b1c5397b5b4de8aadcef0","657b1c5397b5b4de8aadcef3","657b1c5397b5b4de8aadcef6","657b1c5497b5b4de8aadcef9","657b1c5497b5b4de8aadcefc","657b1c5497b5b4de8aadceff","657b1c5497b5b4de8aadcf02","657b1c5497b5b4de8aadcf05","657b1c5497b5b4de8aadcf08","657b1c5497b5b4de8aadcf0b","657b26b3e61c6214415d873c","657b336bccbc4bac79a3296c","657ebbf8f3fd210287e5dc9b","65801da6b54993285f5dc870","658049b3f287217928f7fe99","658163619ead2e155a0e4a43","6581bd78d5ce2994a79f087d","658243e59bc48310cf15593b"];    

        for (const article of articles) {
            const writer = Math.floor(Math.random() * idwriter.length);
            const reader = Math.floor(Math.random() * idReader.length);
            const randomWriter = idwriter[writer];
            article.ID_author = randomWriter;
            const array = article.comments;
            for (const comment of array) {
                const randomReader = idReader[reader];
                comment.id_user = randomReader
            }
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
        const deletedArticle = await Article.deleteMany();

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

        const searchString = req.params.searchString;

        const users = await User.find({ 'FullName': { $regex: searchString, $options: 'i' } });
        const userIds = users.map(user => user._id);


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
            }, // Search by Category
            {
                ID_author: {
                    $in: userIds
                }
            } // Search by Writer
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


exports.likeArtice = async (req, res, next) => {
    try {
        const id_article = req.params.id;
        const articles = await Article.findById(id_article);

        // If the article with the specified ID is not found, return an error response
        if (!articles) {
            return res.status(404).json({
                status: 'fail',
                message: 'Article not found'
            });
        }

        articles.likes = articles.likes + 1;



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
