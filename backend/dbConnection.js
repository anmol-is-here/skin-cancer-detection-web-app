const mongoose = require("mongoose");

async function connectToMongoDB(url) {
    try {
        const instance = mongoose.connect(url);
    } catch (error) {
        console.log(err);
        
    }
}

module.exports = connectToMongoDB;