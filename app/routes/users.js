const express = require("express");

const router = express.Router();
const { UserController } = require("../controllers");

const uc = new UserController();

router.get("/", uc.list);

module.exports = router;
