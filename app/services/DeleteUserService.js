const { Service } = require("../libraries");
const models = require("../models");

/**
 * Delete user service class
 */
class DeleteUserService extends Service {
	/**
     * Execute method of service
     */
	async execute(id) {
		try {
			const deleted = await models.User.destroy({
				where: { id },
			});
			return deleted;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = DeleteUserService;
