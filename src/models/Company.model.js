const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Company = new Schema({
    company_id: {type: Number},
    address: {type: String},
    name: {type: String},
    user_id: {type: Number},
})

module.exports = mongoose.Model('Company', Company)