/* by: ArthurSV */

var express = require("express");
var router = express.Router();

const authControl = require("./../controllers/authenticate");

router.post("/", authControl.auth);

module.exports = router;