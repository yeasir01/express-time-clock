const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const auth = require('../config/middleware/auth');

router.route('/api/register')
    .post(userController.registerUser)

router.route('/api/auth')
    .post(userController.authenticateUser)

router.route('/api/auth/user')
    .get(auth, userController.getUserData)
    
module.exports = router;