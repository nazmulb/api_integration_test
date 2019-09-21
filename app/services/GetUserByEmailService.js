const { Service } = require("../libraries");
const models = require("../models");

/**
 * Get User By Email Service Class
 */
class GetUserByEmailService extends Service {
	/**
     * Execute method of service
     */
	async execute(email) {
		try {
			const user = await models.User.findOne({
				where: { email },
			});
			return user;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = GetUserByEmailService;
