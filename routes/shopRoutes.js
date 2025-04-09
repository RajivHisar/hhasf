const express = require("express");
const { addShop, getShops } = require("../controllers/shopController");
const router = express.Router();

router.post("/add", addShop);
router.get("/all", getShops);

module.exports = router;
