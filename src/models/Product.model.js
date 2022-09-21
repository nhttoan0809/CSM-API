const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Product = new Schema({
    product_id: {type: Number},
    description: {type: String},
    pallet_id: {type: Number},
    position: {type: Number},
    storage_time: {type: Number}
})

module.exports = mongoose.Model('Product', Product)