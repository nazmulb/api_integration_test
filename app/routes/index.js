const express = require("express");

const router = express.Router();
const { PageController } = require("../controllers");

const pc = new PageController();

/* GET home page. */
router.get("/", pc.index);

/* GET about page. */
router.get("/about", pc.about);

module.exports = {
	indexRouter: router,
	usersRouter: require("./users"),
	employeesRouter: require("./employees"),
};
