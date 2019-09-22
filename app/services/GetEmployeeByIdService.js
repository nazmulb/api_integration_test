const { Service } = require("../libraries");
const models = require("../models");

/**
 * Get employee by id service class
 */
class GetEmployeeByIdService extends Service {
	/**
     * Execute method of service
     */
	async execute(id) {
		console.log(id);
		try {
			const employee = await models.Employee.findOne(
				{
					include: [
						{ model: models.User, attributes: ["firstName", "lastName", "email"] },
						{ model: models.Company, attributes: ["name"] },
					],
					where: { id },
				},
			);
			return employee;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = GetEmployeeByIdService;
