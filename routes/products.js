const express = require("express");
const { getAllProducts, getAllProductsTesting, getAllProductsByCompany, getAllProductsByCompanyAndName } = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/getProductsByCompany").get(getAllProductsByCompany);
router.route("/getProductsByCompanyAndName").get(getAllProductsByCompanyAndName);

module.exports = router;
