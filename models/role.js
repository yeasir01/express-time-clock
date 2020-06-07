const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
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

const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;