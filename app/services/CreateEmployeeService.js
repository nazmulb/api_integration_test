const { Service } = require("../libraries");
const models = require("../models");

/**
 * Create Employee Service Class
 */
class CreateEmployeeService extends Service {
	/**
     * Execute method of service
     */
	async execute(data) {
		try {
			const employee = await models.Employee.create(data);
			return employee;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = CreateEmployeeService;
