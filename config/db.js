const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://thelearningstationhsr:0ew3jWUbJZqWeQJi@registration.c6ung8q.mongodb.net/shopFlatDB?retryWrites=true&w=majority&appName=registration", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
