const Product = require("../models/product");
const getAllProducts = async (req, res) => {
    const productData = await Product.find({});
    res.status(200).json({ productData });
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "getAllProductsTesting" });
};
//using req.query
//ex: localhost:3000/api/products/getProductsByCompany?company=Dell
const getAllProductsByCompany = async (req, res) => {
    const { company } = req.query;
    console.log(company);
    const productData = await Product.find({ company: company });
    console.log(productData.length);

    res.status(200).json({ productData });
};

//using req.query
//ex localhost:3000/api/products/getProductsByCompanyAndName?company=Apple&name=iPad Air
const getAllProductsByCompanyAndName = async (req, res) => {
    const { company, name, featured } = req.query;
    let queryObject = {};
    //search filter using strict keynanmes and values based on regex
    // localhost:3000/api/products/getProductsByCompanyAndName?company=Apple&name=iPhone
    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    const productData = await Product.find(queryObject);
    res.status(200).json({ productData });
};
//sort
const sortProductsBy = async (req, res) => {
    try {
        // Get the sort query from req.query.sort
        const sortFields = req.query.sort
            ? Object.fromEntries(
                  req.query.sort.split(",").map(field => [
                      field.replace(/^-/, ""), // Remove '-' for field name
                      field.startsWith("-") ? -1 : 1, // Determine sort order
                  ])
              )
            : { name: 1 }; // Default to sorting by name
        console.log(sortFields);
        // Find products and apply sorting
        const sortedProducts = await Product.find().sort(sortFields);

        // Respond with sorted products
        res.status(200).json({ sortedProducts });
    } catch (error) {
        res.status(500).json({ error: "Failed to sort products" });
    }
};
//select
//localhost:3000/api/products/selectProducts?select=company,price
const selectProducts = async (req, res) => {
    const { select } = req.query;
    let productData = Product.find({}).select("name");
    if (select) {
        let selectFix = select.split(",").join(" ");
        productData.select(selectFix);
    }
    const products = await productData;
    res.status(200).json({ products });
};

//pagination and limit
const getProductsPerPage = async (req, res) => {
    const { page, limit } = req.query;
    const pageInt = parseInt(page) || 1; // Get current page from query, default to 1
    const limitInt = parseInt(limit) || 3; // Limit the number of items per page, default to 3
    const skip = (pageInt - 1) * limitInt; // Calculate the number of documents to
    console.log(skip);
    let productData = await Product.find({}).skip(skip).limit(limitInt);
    res.status(200).json({ productData });
};

module.exports = {
    getAllProducts,
    getAllProductsTesting,
    getAllProductsByCompany,
    getAllProductsByCompanyAndName,
    sortProductsBy,
    selectProducts,
    getProductsPerPage,
};
