const express = require("express");
const { getHome } = require("../Controller/HomeController");
const router = express.Router();

router.get("/", getHome);

module.exports = router;
