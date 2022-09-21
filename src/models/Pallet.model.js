const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Pallet = new Schema({
    pallet_id: {type: Number},
    description: {type: String},
    is_used: {type: Number},
    warehouse_id: {type: Number},
    type: {type: String},
    length: {type: Number},
    width: {type: Number},
    hieght: {type: Number},
    tiers: {type: Number},
    vertical_separators: {type: Number},
    created_date: {type: Date},
    used_time: {type: Number},
})

module.exports = mongoose.Model('Pallet', Pallet)