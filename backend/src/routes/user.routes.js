const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');
const auth = require('../middlewares/auth');

router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;