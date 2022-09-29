const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Pallet = new Schema({
    pallet_id: {type: mongoose.Types.ObjectId},
    pallet_template_id: {type: mongoose.Types.ObjectId},
    warehouse_id: {type: mongoose.Types.ObjectId},
    description: {type: String},
    is_used: {type: Boolean},
    import_date: {type: Date},
    storage_start_date: {type: Date},
    position: {type: String}
})

module.exports = mongoose.Model('Pallet', Pallet)