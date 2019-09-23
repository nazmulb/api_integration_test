const express = require("express");

const router = new express.Router();
const { EmployeeController } = require("../controllers");

const ec = new EmployeeController();

router
	.route("/")
	.get(ec.list)
	.post(ec.create);

router
	.route("/:id")
	.get(ec.view)
	.patch(ec.update)
	.delete(ec.delete);

module.exports = router;
