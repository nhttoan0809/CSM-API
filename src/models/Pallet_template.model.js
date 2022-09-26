const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Pallet_template = new Schema({
    pallet_template_id: {type: mongoose.Types.ObjectId},
    description: {type: String},
    type: {type: String},
    length: {type: Number},
    width: {type: Number},
    height: {type: Number},
    tiers: {type: Number},
    vertical_separators: {type: Number},
})

module.exports = mongoose.Model('Pallet_template', Pallet_template)