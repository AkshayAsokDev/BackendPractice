const express = require("express");
const { getHome, getAbouts, getFitness } = require("../Controller/HomeController");
const router = express.Router();

router.get("/", getHome);
router.get("/abouts", getAbouts);
router.get("/fitness", getFitness);

module.exports = router;
