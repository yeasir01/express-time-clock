const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    locationName: {
        type: String,
        required: [true, "a location name is required!"],
        trim: true
    },
    address: String,
    city: String,
    state: String,
    postalCode: String,
    phone: String,
    employees: [{ type: Schema.Types.ObjectId, ref: "Employee" }],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;