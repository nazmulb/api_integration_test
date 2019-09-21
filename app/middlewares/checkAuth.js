const jwt = require("jsonwebtoken");

const config = require(`${__dirname}/../config`);

const checkAuth = (escapeURLs) => (req, res, next) => {
	for (let i = 0; i < escapeURLs.length; i += 1) {
		if (req.originalUrl.match(escapeURLs[i])) return next();
	}

	try {
		const token = req.headers.auth_token;
		jwt.verify(token, config.JWT_SECRET_KEY);
		return next();
	} catch (e) {
		return next("Unauthorized: Missing or invalid auth token.");
	}
};

module.exports = checkAuth;
