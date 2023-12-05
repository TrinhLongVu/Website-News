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
        const { UserName, Password, ConfirmPassword } = req.body;

        // check username is Taken
        const isTaken = await User.findOne({ UserName });

        // Nếu username is Taken, return fail
        if (isTaken) {
            return res.status(400).json({
                status: "fail",
                msg: "Username is already taken",
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

        // Find the user by ID and delete it
        const deletedUser = await User.deleteOne({ _id });

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