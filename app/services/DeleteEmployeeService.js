const { Service } = require("../libraries");
const models = require("../models");

/**
 * Delete employee service class
 */
class DeleteEmployeeService extends Service {
	/**
     * Execute method of service
     */
	async execute(id) {
		try {
			const deleted = await models.Employee.destroy({
				where: { id },
			});
			return deleted;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = DeleteEmployeeService;
