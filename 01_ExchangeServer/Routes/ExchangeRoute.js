
const express = require("express");
const { getCurrencies, convertCurrencies } = require("../Controllers/ExchangeController");
const router = express.Router();

router.use("/currencies", getCurrencies);
router.use("/convert", convertCurrencies);

module.exports = router;