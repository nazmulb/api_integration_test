const express = require("express");

const router = express.Router();
const { PageController } = require("../controllers");

const pc = new PageController();

router.get("/home", pc.index);

router.get("/about", pc.about);

module.exports = {
	pageRouter: router,
	usersRouter: require("./users"),
	employeesRouter: require("./employees"),
};
