const mongoose = require('mongoose');
const { database } = require('./keys');
const url = "mongodb+srv://" + database.user + ":" + database.password + "@cluster0.minuz3l.mongodb.net/bomarea?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { connectDB };