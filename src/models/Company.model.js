const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Company = new Schema({
    company_id: {type: mongoose.Types.ObjectId},
    company_name: {type: String},
    company_address: {type: String},
    owner_id: {type: mongoose.Types.ObjectId},
})

module.exports = mongoose.model('Company', Company)