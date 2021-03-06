const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClockInSchema = new Schema({
    startTime: {
        type: String,
        required: [true, "a start time is required!"],
        trim: true
    },
    endTime: {
        type: String,
        required: [true, "an end time is required!"],
        trim: true
    },
    role: {
        type: Object,
        required: [true, "you must select atleast one role!"]
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false
        }
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const ClockIn = mongoose.model("ClockIn", ClockInSchema);

module.exports = ClockIn;