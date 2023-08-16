const express = require("express");
const userCtrl = require("../controller/userCtrl");

const router = express.Router();

router.post("/register", userCtrl.createUser);
router.post("/login", userCtrl.loginUserCtrl);
router.get("/all-users", userCtrl.getallUser);

module.exports = router;
