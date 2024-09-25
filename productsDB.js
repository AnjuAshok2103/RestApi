require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJSON = require("./products.json");
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Product.deleteMany(); //delete previous data and add new
        await Product.create(ProductJSON);
        console.log("JSON added");
    } catch (error) {
        console.log(error);
    }
};

start();
//create a new collection and add json data in the database.
