const Employee = require('../models/employee');

module.exports = {
    getAllEmployees: (req, res) => {
        Employee.find()
        .sort({date: -1 })
        .then(employees => res.json(employees))
    },
    newEmployee: (req, res) => {
        const newEmployee = new Employee(res.body.employee);

        newEmployee.save().then(employee => res.json(employee));
    },
    deleteEmployee: (req, res) => {
        Employee.findById(req.params.id)
        .then(employee => employee.remove())
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
    }
}