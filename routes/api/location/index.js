const express = require('express');
const router = express.Router();
const LocationController = require('../../../controllers/location')

router.route("/")
    // @route  GET api/locations
    // @desc   GET all locations
    // @access Public
    .get(LocationController.getAllLocations)
    // @route  POST api/Locations
    // @desc   POST a Location
    // @access Public
    .post(LocationController.createNewLocation)

router.route("/:id")
    // @route  Delete api/locations:id
    // @desc   Delete a Location
    // @access Public
    .delete(LocationController.deleteLocation)

module.exports = router;