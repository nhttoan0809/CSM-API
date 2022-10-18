const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Agent = new Schema({
    agent_id: {type: mongoose.Types.ObjectId},
    agent_name: {type: String},
    agent_owner: {type: String},
    company_id: {type: mongoose.Types.ObjectId}
})

module.exports = mongoose.model('Agent', Agent)