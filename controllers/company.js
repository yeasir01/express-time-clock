const Company = require('../models/company');

module.exports = {
    getCompanyInfo: (req, res) =>{
        Company.find({})
        .sort({date: -1 })
        .then(companies => res.json(companies))
        .catch(err => console.log(err))
    }
}