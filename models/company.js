const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolesSchema = new Schema({
    description: {
        type: String,
        required: [true, "a role description is required!"],
        trim: true
    },
    payRate: {
        type: String,
        required: [true, "a last name is required!"],
        trim: true
    },
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const employeesSchema = new Schema({
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
    address: String,
    city: String,
    state: String,
    postalCode: String,
    phone: String,
    email: String,
    roles: [rolesSchema],
    active: {
        type: Boolean,
        default: true
    },
    pin: {
        type: Number,
        required: [true, "a pin is required!"],
        trim: true
    },
    records: [
        {
          type: Schema.Types.ObjectId,
          ref: "records"
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

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
    employees: [employeesSchema],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

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
    Locations: [LocationSchema],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;