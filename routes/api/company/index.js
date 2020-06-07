const express = require('express');
const router = express.Router();
const CompanyController = require('../../../controllers/company')

// @route  GET api/company/all
// @desc   GET all companies in db
// @access Public
router.route("/all")
    .get(CompanyController.getCompanyInfo)

module.exports = router;