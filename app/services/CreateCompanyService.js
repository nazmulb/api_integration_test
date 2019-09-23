const { Service } = require("../libraries");
const models = require("../models");

/**
 * Create Company Service Class
 */
class CreateCompanyService extends Service {
	/**
     * Execute method of service
     */
	async execute(name) {
		try {
			const company = await models.Company.create({ name });
			return company;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = CreateCompanyService;
