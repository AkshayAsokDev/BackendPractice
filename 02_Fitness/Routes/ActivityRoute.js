const express = require("express");
const { getAllUsers, getUsersByGender, getUsersByFirstName } = require("../Controller/ActivityController");
const { CheckAuthentication } = require("../Middleware/Authentication");
const router = express.Router();

router.get("/getAllUsers", CheckAuthentication, getAllUsers);
router.get("/getUsersByGender", CheckAuthentication, getUsersByGender);
router.get("/getUsersByFirstName/:firstName", CheckAuthentication, getUsersByFirstName);

module.exports = router;