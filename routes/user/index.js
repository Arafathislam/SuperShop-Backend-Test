var express = require('express');
var userController = require('../../controllers/user/userController.js');
var checkUserAuth = require('../../middleware/auth.js');
var router = express.Router();

// Route Level Middleware
// router.use('/cnpsw', checkUserAuth);

router.post('/register', userController.addUser);
router.post('/login', userController.userLogin);
router.post('/cnpsw', checkUserAuth, userController.changePassword);
router.get('/logusr', checkUserAuth, userController.loggedUser);
router.post('/resetemail', userController.sendResetEmail);
router.post('/resetpsw/:id/:token', userController.passwordReset);

module.exports = router;
