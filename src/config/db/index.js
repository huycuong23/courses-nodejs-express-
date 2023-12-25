const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/my_database');
        console.log("connection successful");
    } catch (error) {
        console.log("connection error");
    }
}

module.exports = { connect }