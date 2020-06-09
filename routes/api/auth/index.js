const express = require('express');
const router = express.Router();
const AuthController = require('../../../controllers/auth');

//Authentication Middleware
const Auth = require('../../../config/middleware/auth');

router.route('/register')
    // @route  POST api/auth/register
    // @desc   POST registration
    // @access Public
    .post(AuthController.registerUser)


router.route('/')
    // @route  POST api/auth/
    // @desc   POST authenticate user
    // @access Public
    .post(AuthController.authenticateUser)


router.route('/user')
    // @route  POST api/auth/user
    // @desc   POST header w/token then, recieve user data
    // @access Private
    .post(Auth, AuthController.getUserData)
    
module.exports = router;