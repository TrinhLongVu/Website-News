const User = require('../models/userModel')
const Article = require('../models/articleModel')
exports.Authentication = async (req, res) => {
    // {
    //     "status": "success",
    //     "body": {
    //         "_id": "657b1c5297b5b4de8aadced8",
    //         "UserName": "nvAnh@gmail.com",
    //         "Password": "123456789",
    //         "Role": "writer",
    //         "FullName": "Nguyen Van Anh",
    //         "type": "local",
    //         "Birthday": "2000-12-03T17:00:00.000Z",
    //         "Gender": "male",
    //         "PhoneNumber": "0771841515",
    //         "Address": "58/108 Nguyen Thien Thuat, Phuong 2, Quan 3, TP Ho Chi Minh",
    //         "ID_follow_writer": [],
    //         "Saved_news": [],
    //         "Image_Avatar": "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-facebook-mac-dinh-15.jpg",
    //         "Account_type": "normal",
    //         "ID_article": [],
    //         "ID_user_follow": [],
    //         "__v": 0
    //     }
    // }

    if (req.isAuthenticated()) {
        const datas = req.user.ID_follow_writer;
        const user = {
            ...req.user
        }._doc;
        user.following = []
        user.written = await Article.find({ ID_author : user._id})
        for (const data of datas) {
            const {
                _id,
                FullName,
                Image_Avatar
            } = await User.findById(data);
            const object = {
                id: _id,
                name: FullName,
                image: Image_Avatar
            }
            user.following = [...user.following, object]
        }
        res.json({
            status: "success",
            body: user
        })
    } else {
        res.json({
            status: "failed",
        })
    }
}

exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).json({
                error: 'Logout failed'
            });
        }

        return res.status(200).json({
            message: 'Logout successful'
        });
    });
}