const fs = require('fs');
const User = require('../models/userModel')
const Article = require('../models/articleModel')
const cloudinary = require('cloudinary').v2;

//=========================== FUNCTION =========================================================================
function checkIfElementExists(element, array) {
    return array.includes(element);
}
//=============================================================================================================

exports.getAllUsers = async (req, res, next) => {
    try {
        const alldata = await User.find()

        res.status(201).json({
            status: 'success',
            data: alldata
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.createUser = async (req, res, next) => {

    try {
        //===========check username (email) available==========================
        const {
            UserName,
            Password,
            ConfirmPassword
        } = req.body;

        // check username is Taken
        const isTaken = await User.findOne({
            UserName
        });

        // If username is Taken, return fail
        if (isTaken) {
            return res.status(400).json({
                status: "fail",
                msg: "Username is already taken",
            });
        }


        //===========check len Password > 6 ==========================
        if (Password.length < 6) {
            return res.status(400).json({
                status: "fail",
                msg: "Password must be at least 6 characters long",
            });
        }




        //===========check confirm Password==========================

        if (Password != ConfirmPassword) {
            return res.status(400).json({
                status: "fail",
                msg: "incorrect Confirm Password",
            });
        }


        //==========Create New User===============================

        const NewBody = {
            UserName: UserName,
            Password: Password,
        }

        const newUser = await User.create(NewBody);

        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.createAllUser = async (req, res, next) => {
    try {

        const filePath = `${__dirname}data\\user.json`.replace('controllers', '');
        const users = JSON.parse(fs.readFileSync(filePath, 'utf-8')).user;

        //=================================================================================
        for (const user of users) {
            const {
                UserName
            } = user;

            try {
                // Check if username is taken
                const isTaken = await User.findOne({
                    UserName
                });

                // If username is taken, log a message and continue to the next iteration
                if (isTaken) {
                    continue;
                }

                // If username is not taken, create the user
                await User.create(user);

            } catch (error) {
                // Handle any other errors that might occur during user creation
                console.error(`Error creating user with username '${UserName}':`, error);
            }
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

exports.getUser = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the user by ID 
        const finduser = await User.findById(_id);

        if (!finduser) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }


        res.status(201).json({
            status: 'success',
            data: finduser
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.updateUser = async (req, res, next) => {
    try {

        const _id = req.params.id;
        const {
            fullname,
            gender,
            phone,
            address,
            birthday
        } = req.body
        
        const user = {
            FullName: fullname,
            Gender: gender,
            PhoneNumber: phone,
            Address: address,
            Birthday: birthday
        }

        if (req.files) {
            const file = req.files.image;
            const result = await cloudinary.uploader.upload(file.tempFilePath, {
                public_id: `${Date.now()}`,
                resource_type: "auto",
                folder: "images"
            })
            user.Image_Avatar = result.url
        }


        const update = await User.findByIdAndUpdate(_id, user, {
            new: true
        });

        if (!update) {
            return res.status(404).json({
                status: 'fail',
                msg: 'Update fail.',
            });
        }

        res.status(201).json({
            status: 'success',
            data: update
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
    next();
}

exports.deleteUser = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the user by ID and delete it
        const deletedUser = await User.deleteOne({
            _id
        });
        // const deletedUser = await User.deleteMany();

        if (!deletedUser) {
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


exports.update_Reader_To_Writer = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the user by ID 
        const finduser = await User.findById(_id);

        if (!finduser) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }



        finduser.pending = "false";
        finduser.Role = "writer";




        const update = await User.findByIdAndUpdate(_id, finduser, {
            new: true
        });

        if (!update) {
            return res.status(404).json({
                status: 'fail',
                msg: 'Update fail.',
            });
        }

        res.status(201).json({
            status: 'success',
            data: finduser
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
    next();
}


//===============================    WRITER     =====================================================

exports.getWriter = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the user by ID 
        const find_user_writer = await User.findById(_id);

        if (!find_user_writer) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }


        //==== Check writer, If role is "writer"

        if (find_user_writer.Role != "writer") {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'Not Writer.',
            });
        }



        //==== Set statusFollow: return 'Followed' or 'Have not followed'
        const _id_user = req.body._id;
        statusFollow = 'Have not followed'
        if (checkIfElementExists(_id_user, find_user_writer.ID_user_follow)) {
            statusFollow = 'Followed'
        }


        //== get Article of writer
        const ID_author = find_user_writer._id;
        const Article_of_writer = await Article.find({
            ID_author
        });


        res.status(201).json({
            status: 'success',
            statusFollow: statusFollow,
            data: find_user_writer,
            Article_of_writer: Article_of_writer

        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.Follow_Or_UnFollow_Writer = async (req, res, next) => {
    try {

        const _id_writer = req.params.id;

        //====================find writer====================
        // Find the user by ID 
        const find_user_writer = await User.findById(_id_writer);

        if (!find_user_writer) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'Writer not found.',
            });
        }

        //==== Check writer, If role is "writer"

        if (find_user_writer.Role != "writer") {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'Not Writer.',
            });
        }


        //====================find user====================
        const _id_user = req.body._id;
        // Find the user by ID 
        const find_user_user = await User.findById(_id_user);

        if (!find_user_user) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'Writer not found.',
            });
        }


        if (checkIfElementExists(_id_user, find_user_writer.ID_user_follow)) {
            //   Followed => Unfollow
            //========================== Delete ID =========================================

            find_user_user.ID_follow_writer = find_user_user.ID_follow_writer.filter(function (element) {
                return element !== _id_writer;
            });

            find_user_writer.ID_user_follow = find_user_writer.ID_user_follow.filter(function (element) {
                return element !== _id_user;
            });

        } else {
            //  'Have not followed' => following
            //========================== PUSH ID =========================================

            find_user_user.ID_follow_writer.push(_id_writer);
            find_user_writer.ID_user_follow.push(_id_user);

        }

        //========================== UPDATE WRITE AND USER=========================================

        const update_writer = await User.findByIdAndUpdate(_id_writer, find_user_writer, {
            new: true
        })

        const update_user = await User.findByIdAndUpdate(_id_user, find_user_user, {
            new: true
        })

        //=========================================================================


        if (!update_writer || !update_user) {
            return res.status(404).json({
                status: 'fail',
                msg: 'Follow fail.',
            });
        }

        res.status(201).json({
            status: 'success',
            data: {
                update_user,
                update_writer
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
    next();
}

exports.getArticlesWritten = async (req, res) => {
    try {
        const ID_author = req.params.id;
        const datas = await Article.find({
            ID_author
        });

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

        res.status(201).json({
            status: 'success',
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.upgrade = async (req, res) => {
    try {
        const id_Reader = req.params.id;
        const result = await User.updateMany({
            _id: id_Reader
        }, {
            $set: {
                pending: true
            }
        });
        res.status(201).json({
            status: 'success',
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

//===============================    SAVE ARTICLE     =====================================================


exports.getSaveArticle = async (req, res, next) => {
    try {

        const _id = req.params.id;


        // Find the user by ID 
        const finduser = await User.findById(_id);


        if (!finduser) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }


        const save_Article = finduser.Saved_news;

        // Array to store the results
        let savedArticles = [];


        // Loop through saved article IDs and retrieve each article
        for (const articleId of save_Article) {

            const article = await Article.findById(articleId);

            if (article) {
                // Retrieve author information
                const author = await User.findById(article.ID_author);

                // Modify article data
                let modifiedArticle = {
                    ...article
                }._doc;
                modifiedArticle.author_name = author.FullName;
                modifiedArticle.imageAuthor = author.Image_Avatar;

                // Add the modified article to the results array
                savedArticles.push(modifiedArticle);
            }
        }

        res.status(201).json({
            status: 'success',
            data: finduser,
            list_saved_Articles: savedArticles
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}


exports.getPending = async (req, res) => {
    try {
        const pendingUsers = await User.find({
            pending: 'true'
        });
        res.status(201).json({
            status: 'success',
            data: pendingUsers
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}
exports.Save_Or_Unsave_Article = async (req, res, next) => {
    try {

        const _id_article = req.params.id;


        //====================find writer====================
        // Find the user by ID 
        const find_article = await Article.findById(_id_article);

        if (!find_article) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'Article not found.',
            });
        }

        //====================find user====================
        const _id_user = req.body._id;
        // Find the user by ID 
        const find_user_user = await User.findById(_id_user);

        if (!find_user_user) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }


        if (checkIfElementExists(_id_article, find_user_user.Saved_news)) {
            //   Saved => Unsave
            //========================== Delete ID =========================================

            find_user_user.Saved_news = find_user_user.Saved_news.filter(function (element) {
                return element !== _id_article;
            });

        } else {
            //  'Have not saved' => Saving
            //========================== PUSH ID =========================================

            find_user_user.Saved_news.push(_id_article);
        }

        //========================== UPDATE WRITE AND USER=========================================


        const update_user = await User.findByIdAndUpdate(_id_user, find_user_user, {
            new: true
        })


        //=========================================================================


        if (!update_user) {
            return res.status(404).json({
                status: 'fail',
                msg: 'Save fail.',
            });
        }

        res.status(201).json({
            status: 'success',
            data: {
                update_user
            }

        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }

    next();

}


exports.getFollowing = async (req, res) => {
    try {


        const _id = req.params.id;
        // Find the user by ID 
        const finduser = await User.findById(_id);

        if (!finduser) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }

        const Arr_ID_follow_writer = finduser.ID_follow_writer;

        // Array to store the results
        let inforWriters = [];


        // Loop through saved article IDs and retrieve each article
        for (const IDwriter of Arr_ID_follow_writer) {

            const writer = await User.findById(IDwriter);

            if (writer) {

                const inforWriter = {
                    id_user: writer._id,
                    FullName: writer.FullName,
                    Image_Avatar: writer.Image_Avatar
                };

                // Add the modified article to the results array
                inforWriters.push(inforWriter);
            }
        }




        res.status(201).json({
            status: 'success',
            data: inforWriters
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.denyUpgrade = async (req, res) => {
    try {
        const _id = req.params.id;
        const finduser = await User.findById(_id);
        finduser.pending = "false";
        const update = await User.findByIdAndUpdate(_id, finduser, {
            new: true
        });
        res.status(201).json({
            status: 'success',
            data: finduser
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.totalUser = async (req, res) => {
    try {
        const statistics = [];

        let currentDate = new Date()

        const users = await User.find({});
        for (let i = 0; i < 7; i++) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            let quantity = 0;
            for (const user of users) {
                const day = new Date(formattedDate);
                day.setDate(day.getDate() + 1);
                if ((new Date(user.createAt) - new Date(formattedDate)) > 0 && (new Date(user.createAt) - day) < 0) {
                    quantity++;
                }
            }
            const data = {
                day: formattedDate,
                quantity: quantity
            };

            currentDate.setDate(currentDate.getDate() - 1);
            statistics.push(data);
        }
        res.status(200).json({
            status: "success",
            data: statistics
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err.msg
        })
    }
}

exports.post = async (req, res) => {
    try {
        const statistics = [];

        let currentDate = new Date()
        for (let i = 0; i < 7; i++) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            let day = new Date(formattedDate);
            day.setDate(day.getDate() + 1);

            const quantity = await Article.countDocuments({
                posted_time: {
                    $gte: new Date(formattedDate),
                    $lt: new Date(day)
                }
            })

            const data = {
                day: formattedDate,
                quantity: quantity
            };

            currentDate.setDate(currentDate.getDate() - 1);
            statistics.push(data);
        }
        res.status(200).json({
            status: "success",
            data: statistics
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err.msg
        })
    }
}

exports.view = async (req, res) => {
    try {
        const statistics = [];

        let currentDate = new Date()
        for (let i = 0; i < 7; i++) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            let day = new Date(formattedDate);
            day.setDate(day.getDate() + 1);

            const articles = await Article.find({
                posted_time: {
                    $gte: new Date(formattedDate),
                    $lt: new Date(day)
                }
            })
            let quantity = 0;
            for (const article of articles) {
                quantity += article.view
            }

            const data = {
                day: formattedDate,
                quantity: quantity
            };

            currentDate.setDate(currentDate.getDate() - 1);
            statistics.push(data);
        }
        res.status(200).json({
            status: "success",
            data: statistics
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err.msg
        })
    }
}

//===============================    REPORT, BAN WRITER     =====================================================

exports.report_writer = async (req, res) => {
    try {
        const id_Writer = req.params.id;

        // Find the user by ID 
        const find_user_writer = await User.findById(id_Writer);

        if (!find_user_writer) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }


        //==== Check writer, If role is "writer"

        if (find_user_writer.Role != "writer") {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'Not Writer.',
            });
        }


        const result = await User.updateMany({
            _id: id_Writer
        }, {
            $set: {
                report_pending: true
            }
        });
        res.status(201).json({
            status: 'success',
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.get_report_writer = async (req, res) => {
    try {
        const report_pending_Writer = await User.find({
            report_pending: 'true'
        });
        res.status(201).json({
            status: 'success',
            data: report_pending_Writer
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}

exports.Accept_Ban_Writer = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the writer by ID 
        const findwriter = await User.findById(_id);

        if (!findwriter) {
            // If the writer with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'writer not found.',
            });
        }

        if (findwriter.report_pending == "true" && findwriter.Role == "writer") {

            findwriter.report_pending = "false";
            findwriter.Role = "Ban writer";

        }


        const update = await User.findByIdAndUpdate(_id, findwriter, {
            new: true
        });

        if (!update) {
            return res.status(404).json({
                status: 'fail',
                msg: 'Update fail.',
            });
        }

        res.status(201).json({
            status: 'success',
            data: update
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
    next();
}

exports.Deny_Ban_Writer = async (req, res, next) => {
    try {

        const _id = req.params.id;

        // Find the writer by ID 
        const findwriter = await User.findById(_id);

        if (!findwriter) {
            // If the writer with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'writer not found.',
            });
        }

        findwriter.report_pending = "false";
        findwriter.Role = "writer";


        const update = await User.findByIdAndUpdate(_id, findwriter, {
            new: true
        });

        if (!update) {
            return res.status(404).json({
                status: 'fail',
                msg: 'Update fail.',
            });
        }

        res.status(201).json({
            status: 'success',
            data: update
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
    next();
}