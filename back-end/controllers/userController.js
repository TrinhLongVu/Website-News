const fs = require('fs');
const User = require('../models/userModel')

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
        // Lấy username từ request body
        const UserName = req.body.username;

        console.log(">>>> da den day", UserName);

        // Kiểm tra xem username đã tồn tại hay chưa
        const isTaken = await User.findOne({ UserName });

        // Nếu username đã tồn tại, trả về lỗi
        if (isTaken) {
            return res.status(400).json({
                status: "fail",
                msg: "Username is already taken",
            });
        }

        //===========check confirm Password==========================
        const { password } = req.body;
        const { confirmPassword } = req.body;

        if (password != confirmPassword) {
            return res.status(400).json({
                status: "fail",
                msg: "incorrect Confirm Password",
            });
        }

        const NewBody = {
            UserName: req.body.username,
            Password: req.body.password,
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


exports.getUser = (req, res) => {
    res.status(500).send({
        status: "error",
    })
}

exports.updateUser = (req, res) => {
    res.status(500).send({
        status: "error",
    })
}

exports.deleteUser = async (req, res, next) => {
    try {

        const _id = req.params.id;

        console.log(">>>> da den day 1 ", _id);
        // TO DO:
        // Find the user by ID and delete it
        const deletedUser = await User.deleteOne({ _id });

        console.log(">>>> da den day 2", _id);

        if (!deletedUser) {
            // If the user with the specified ID is not found, return an error response
            return res.status(404).json({
                status: 'fail',
                msg: 'User not found.',
            });
        }

        // const newUser = req.body
        const allUsers = await User.find()


        res.status(201).json({
            status: 'success',
            data: allUsers
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            msg: err
        })
    }
}