const mongoose = require('mongoose');

const connect = async () => {
    try {
        // await mongoose.connect('mongodb+srv://toanb1805926:toan123@sandbox.8exq5pz.mongodb.net/cold-warehouse')
        await mongoose.connect('mongodb+srv://toanb1805926:toan123@sandbox.8exq5pz.mongodb.net/cold-warehouse?retryWrites=true&w=majority')
        console.log('Connect Successfully!!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = {connect}
