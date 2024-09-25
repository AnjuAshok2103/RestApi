const express = require("express");
const {
    getAllProducts,
    getAllProductsTesting,
    getAllProductsByCompany,
    getAllProductsByCompanyAndName,
    sortProductsBy,
    selectProducts,
    getProductsPerPage,
} = require("../controllers/products");
const router = express.Router();

router.route("/allProducts").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/getProductsByCompany").get(getAllProductsByCompany);
router.route("/getProductsByCompanyAndName").get(getAllProductsByCompanyAndName);
router.route("/sortProducts").get(sortProductsBy);
router.route("/selectProducts").get(selectProducts);
router.route("/getProductsPerPage").get(getProductsPerPage);

module.exports = router;
