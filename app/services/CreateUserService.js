const { Service } = require("../libraries");
const models = require("../models");

/**
 * Create User Service Class
 */
class CreateUserService extends Service {
	/**
     * Execute method of service
     */
	async execute(data) {
		try {
			const user = await models.User.create(data);
			return user;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = CreateUserService;
