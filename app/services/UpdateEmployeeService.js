const { Service } = require("../libraries");
const models = require("../models");

/**
 * Update employee service class
 */
class UpdateEmployeeService extends Service {
	/**
     * Execute method of service
     */
	async execute(id, data) {
		try {
			const [updated] = await models.Employee.update(data, {
				where: { id },
			});
			return updated;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = UpdateEmployeeService;
