const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Pallet = new Schema({
    pallet_id: {type: mongoose.Types.ObjectId},
    pallet_template_id: {type: mongoose.Types.ObjectId},
    warehouse_id: {type: mongoose.Types.ObjectId},
    is_used: {type: Boolean},
    created_date: {type: Date},
    used_time: {type: Number},
    position: {type: String}
})

module.exports = mongoose.Model('Pallet', Pallet)