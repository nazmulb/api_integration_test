const express = require("express");

const router = express.Router();
const { EmployeeController } = require("../controllers");

const ec = new EmployeeController();

/* GET employees listing. */
router.get("/", ec.list);

module.exports = router;
