
const express = require("express");
const { getCurrencies } = require("../Controllers/ExchangeController");
const router = express.Router();

router.use("/currencies", getCurrencies);

module.exports = router;