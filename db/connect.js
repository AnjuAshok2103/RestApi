const mongoose = require("mongoose");

const connectDB = () => {
    console.log("DB Connected");
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
    });
};

module.exports = connectDB;
