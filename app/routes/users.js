const express = require("express");

const router = new express.Router();
const { UserController } = require("../controllers");

const uc = new UserController();

router
	.route("/")
	.get(uc.list)
	.post(uc.create);

module.exports = router;
