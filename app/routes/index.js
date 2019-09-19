const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
	res.json({ msg: "Welcome" });
});

/* GET home page. */
router.get("/about", (req, res) => {
	res.json({ msg: "About Page" });
});

module.exports = router;
