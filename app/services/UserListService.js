const { Service } = require("../libraries");
const models = require("../models");

/**
 * User List Service Class
 */
class UserListService extends Service {
	/**
     * Execute method of service
     */
	async execute() {
		try {
			const users = await models.User.findAll();
			return users;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = UserListService;
