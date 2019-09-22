const { Service } = require("../libraries");
const models = require("../models");

/**
 * Update user service class
 */
class UpdateUserService extends Service {
	/**
     * Execute method of service
     */
	async execute(id, data) {
		try {
			const [updated] = await models.User.update(data, {
				where: { id },
			});
			return updated;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = UpdateUserService;
