const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    firstName: {
        type: String,
        required: [true, "a first name is required!"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "a last name is required!"],
        trim: true
    },
    companyName: {
        type: String,
        required: [true, "a company name is required!"],
        trim: true
    },
    address: String,
    city: String,
    state: String,
    postalCode: String,
    email: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: [true, "a valid username is required!"],
        index: {unique: true},
        trim: true
    },
    password: {
        type: String,
        required: [true, "a valid password is required!"],
        trim: true
    },
    Locations: [{ type: Schema.Types.ObjectId, ref: "Location" }],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;