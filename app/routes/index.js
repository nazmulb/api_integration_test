const express = require("express");

const router = express.Router();
const { IndexController } = require("../controllers");

const ic = new IndexController();

/* GET home page. */
router.get("/", ic.index);

/* GET about page. */
router.get("/about", ic.about);

module.exports = {
	indexRouter: router,
	usersRouter: require("./users"),
	employeesRouter: require("./employees"),
};
