const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");

const app = express();
const { pageRouter, usersRouter, employeesRouter } = require("./routes");

app.use(logger("tiny"));
app.use(express.json());

app.use("/api", pageRouter);
app.use("/api/users", usersRouter);
app.use("/api/employees", employeesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res) {
	res.status(err.status || 500).json({ msg: err.message });
});

module.exports = app;
