const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Warehouse = new Schema({
    warehouse_id: {type: mongoose.Types.ObjectId},
    warehouse_name: {type: String},
    address: {type: String},
    length: {type: Number},
    width: {type: Number},
    height: {type: Number},
    agent_id: {type: mongoose.Types.ObjectId}
})

module.exports = mongoose.model('Warehouse', Warehouse)