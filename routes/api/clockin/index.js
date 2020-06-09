const express = require('express');
const router = express.Router();
const ClockInController = require('../../../controllers/clockin')


router.route("/")
    // @route  GET api/clockin
    // @desc   GET all clockins
    // @access Public
    .get(ClockInController.getAllClockIns)
    // @route  POST api/clockin
    // @desc   POST a new clockin
    // @access Public
    .post(ClockInController.newClockIn)

router.route("/id")
    // @route  DELETE api/clockin:id
    // @desc   DELETE a clockin record
    // @access Public
    .delete(ClockInController.deleteClockin)

module.exports = router;