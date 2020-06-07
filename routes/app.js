const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/records');
const auth = require('../config/middleware/auth');
    
module.exports = router;