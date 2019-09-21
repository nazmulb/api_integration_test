const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const config = require(`${__dirname}/../config`);
const ServiceFactory = require("../services");

const auth = () => async (req, res, next) => {
	try {
		const getUser = new ServiceFactory().create("GetUserByEmailService");
		const user = await getUser.execute(req.body.email);

		const isValid = bcrypt.compareSync(req.body.password, user.password);

		if (!isValid) {
			next("Unauthorized: Invalid password.");
		}

		const newToken = { token: jwt.sign({ email: user.email }, config.JWT_SECRET_KEY) };
		return res.json(newToken);
	} catch (e) {
		return next(e.message);
	}
};

module.exports = auth;
