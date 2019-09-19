const express = require("express");

const router = express.Router();
const { UserController } = require("../controllers");

const uc = new UserController();

/* GET users listing. */
router.get("/", uc.list);

module.exports = router;
