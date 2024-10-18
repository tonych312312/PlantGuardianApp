const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is imported to read environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
