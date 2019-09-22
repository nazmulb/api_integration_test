const { Service } = require("../libraries");
const models = require("../models");

/**
 * Get user by id service class
 */
class GetUserByIdService extends Service {
	/**
     * Execute method of service
     */
	async execute(id) {
		try {
			const user = await models.User.findOne({
				where: { id },
			});
			return user;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = GetUserByIdService;
