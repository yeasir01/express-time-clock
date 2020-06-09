const Role = require('../models/role');
const Employee = require('../models/employee')

module.exports = {
    getAllRoles: (req, res) => {
        Role.find()
        .sort({createdOn: -1 })
        .then(roles => res.json(roles))
    },
    createNewRole: (req, res) => {
        Employee.findOne({firstName: "Vernon"})
        .then(Employee.Role.push(req.body))
        .catch(err => console.log(err))
    }
}

