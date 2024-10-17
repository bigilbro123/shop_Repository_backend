const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGOBD_URL)
        console.log('connect to mongobdb');

    } catch (error) {
        console.log(`error is ${error}`);


    }

}
module.exports = connectDB