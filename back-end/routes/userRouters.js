const express = require('express')

const router = express.Router();

const userController = require('../controllers/userController')

router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/create/createAll')
    .get(userController.createAllUser)

router
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);



router
    .route('/follow/:id')  // :id of writer
    .patch(userController.followWriter)

router
    .route('/unfollow/:id')  // :id of writer
    .patch(userController.UnfollowWriter)

module.exports = router;