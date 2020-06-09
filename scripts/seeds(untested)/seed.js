const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
 const ClockIn = require('../../models/ClockIn');
const Company = require('../../models/Company');
const Employee = require('../../models/Employee');
const Location = require('../../models/');
  const Record = require('../../models/');
    const Role = require('../../models/');


const clockins = JSON.parse(fs.readFileSync(__dirname + '/stores.json', 'utf-8'));
const companies = JSON.parse(fs.readFileSync(__dirname + '/reviews.json', 'utf-8'));
const employees = JSON.parse(fs.readFileSync(__dirname + '/users.json', 'utf-8'));
const locations = JSON.parse(fs.readFileSync(__dirname + '/stores.json', 'utf-8'));
const records = JSON.parse(fs.readFileSync(__dirname + '/reviews.json', 'utf-8'));
const roles = JSON.parse(fs.readFileSync(__dirname + '/users.json', 'utf-8'));

async function deleteData() {
    console.log('😢😢 Goodbye Data...');
    await Store.remove();
    await Review.remove();
    await User.remove();
    console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
    process.exit();
}

async function loadData() {
    try {
        await ClockIn.insertMany(clockins);
        await Company.insertMany(companies);
        await Employee.insertMany(employees);
        await Location.insertMany(locations);
        await Record.insertMany(records);
        await Role.insertMany(roles);
        console.log('👍👍👍👍👍👍👍👍 Done!');
        process.exit();
    } catch(e) {
        console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
        console.log(e);
        process.exit();
    }
}
if (process.argv.includes('--delete')) {
    deleteData();
} else {
    loadData();
}