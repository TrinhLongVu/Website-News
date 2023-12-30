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

router
    .route('/updateReaderToWriter/:id') // :id of reader
    .patch(userController.update_Reader_To_Writer)

router
    .route('/denyUpgrade/:id')
    .patch(userController.denyUpgrade)

router
    .route('/getfollowing/:id') // :id of reader
    .get(userController.getFollowing)

router
    .route('/admin/totalUser')
    .get(userController.totalUser)

router
    .route('/admin/post')
    .get(userController.post)

router
    .route('/admin/view')
    .get(userController.view)


//===============================    REPORT, BAN WRITER     =====================================================
router
    .route('/report/writer/:id')
    .patch(userController.report_writer)

router
    .route('/admin/getReportPending')
    .get(userController.get_report_writer)

router
    .route('/admin/AcceptBanWriter/:id') // Use to Ban a writer, writer is baned then role: "Ban writer"
    .patch(userController.Accept_Ban_Writer)

router
    .route('/admin/DenylBanWriter/:id')  // Use to Deny or Cancel Ban a writer
    .patch(userController.Deny_Ban_Writer)

module.exports = router;