const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Pallet_template = new Schema({
    pallet_template_id: {type: mongoose.Types.ObjectId},
    type: {type: String},
    length: {type: mongoose.Types.Decimal128},
    width: {type: mongoose.Types.Decimal128},
    height: {type: mongoose.Types.Decimal128},
    vertical_separator: {type: Number},
    horizontal_separator: {type: Number},
    middle_horizontal_separator: {type: Number}
})

module.exports = mongoose.model('Pallet_template', Pallet_template)