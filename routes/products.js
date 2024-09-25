const express = require("express");
const {
    getAllProducts,
    getAllProductsTesting,
    getAllProductsByCompany,
    getAllProductsByCompanyAndName,
    sortProductsBy,
    selectProducts,
} = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/getProductsByCompany").get(getAllProductsByCompany);
router.route("/getProductsByCompanyAndName").get(getAllProductsByCompanyAndName);
router.route("/sortProducts").get(sortProductsBy);
router.route("/selectProducts").get(selectProducts);

module.exports = router;
