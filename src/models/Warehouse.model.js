const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Warehouse = new Schema({
    warehouse_id: {type: Number},
    name: {type: String},
    length: {type: Number},
    width: {type: Number},
    height: {type: Number},
    company_id: {type: Number},
    station_id: {type: Number}
})

module.exports = mongoose.Model('Warehouse', Warehouse)