const Company = require('../models/clockin');

module.exports = {
    getAllClockIns: (req, res) => {
        ClockIn.find()
        .sort({date: -1 })
        .then(clockins => res.json(clockins))
    },
    newClockIn: (req, res) => {
        const newClockIn = new ClockIn(res.body.clockin);

        newClockIn.save().then(clockin => res.json(clockin));
    },
    deleteClockin: (req, res) => {
        ClockIn.findById(req.params.id)
        .then(clockin => clockin.remove())
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
    }
}