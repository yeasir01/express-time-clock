const express = require('express');
const router = express.Router();
const AuthController = require('../../../controllers/auth');

//Authentication Middleware
const Auth = require('../../../config/middleware/auth');

// @route  POST api/auth/register
// @desc   POST registration
// @access Public
router.route('/register')
    .post(AuthController.registerUser)

// @route  POST api/auth/
// @desc   POST authenticate user
// @access Public
router.route('/')
    .post(AuthController.authenticateUser)

// @route  POST api/auth/user
// @desc   POST header w/token then, recieve user data
// @access Private
router.route('/user')
    .post(Auth, AuthController.getUserData)
    
module.exports = router;