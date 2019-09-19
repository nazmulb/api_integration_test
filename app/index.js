const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");

const app = express();
const routes = require("./routes");

app.use(logger("tiny"));
app.use(express.json());

app.use("/api", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res) {
	res.status(err.status || 500).json({ msg: err.message });
});

module.exports = app;
