const express = require("express");
const { getAllUsers, getUsersByGender, getUsersByFirstName } = require("../Controller/ActivityController");
const router = express.Router();

router.get("/getAllUsers", getAllUsers);
router.get("/getUsersByGender", getUsersByGender);
router.get("/getUsersByFirstName/:firstName", getUsersByFirstName);

module.exports = router;