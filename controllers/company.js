const Company = require('../models/company');

module.exports = {
    getAllCompanies: (req, res) =>{
        Company.find({})
        .sort({date: -1 })
        .select("-password")
        .then(companies => res.json(companies))
        .catch(err => console.log(err))
    },
    addNewCompany: (req, res) =>{
        const newCompany = new Company(res.body.company);

        newCompany.save().then(company => res.json(company));
    },
    deleteCompany: (req, res) =>{
        Company.findById(req.params.id)
        .then(company => company.remove())
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
    }
}