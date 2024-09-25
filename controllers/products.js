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
    const productData = await Product.find(req.query);
    res.status(200).json({ productData });
};

module.exports = { getAllProducts, getAllProductsTesting, getAllProductsByCompany, getAllProductsByCompanyAndName };
