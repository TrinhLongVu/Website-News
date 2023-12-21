const express = require('express')

const router = express.Router();
const passport = require('passport')

const userController = require('../controllers/userController')
// const abc = require('../controllers/authenticationController')

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
    .route('/pages/:id') // :id of writer
    .get(userController.getWriter)
    .patch(userController.Follow_Or_UnFollow_Writer) // To Follow or Unfollow a writer (:id is writer's id, User's id is in response body)

router
    .route('/article/:id') // :id of writer
    .get(userController.getArticlesWritten)


router
    .route('/upgrade/writer/:id')
    .patch(userController.upgrade)

router
    .route('/pending/getAll')
    .get(userController.getPending)

router
    .route('/getsavearticle/:id') // :id of user
    .get(userController.getSaveArticle)



router
    .route('/save/:id') // :id of article
    .patch(userController.Save_Or_Unsave_Article)
// req.body
// {
//     "_id": "657b1c5297b5b4de8aadced5"  // _id is ID of USER
// }



router
    .route('/updateReaderToWriter/:id') // :id of reader
    .patch(userController.update_Reader_To_Writer)

router
    .route('/getfollowing/:id') // :id of reader
    .get(userController.getFollowing)


module.exports = router;