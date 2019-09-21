const { Service } = require("../libraries");
const models = require("../models");

/**
 * Employee List Service Class
 */
class EmployeeListService extends Service {
	/**
     * Execute method of service
     */
	async execute() {
		try {
			const employees = await models.Employee.findAll({
				attributes: { exclude: ["createdAt", "updatedAt"] },
				include: [
					{ model: models.User, attributes: ["firstName", "lastName", "email"] },
					{ model: models.Company, attributes: ["name"] },
				],
			});
			return employees;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = EmployeeListService;
