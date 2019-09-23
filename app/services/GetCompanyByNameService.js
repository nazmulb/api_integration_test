const { Service } = require("../libraries");
const models = require("../models");

/**
 * Get Company By Name Service Class
 */
class GetCompanyByNameService extends Service {
	/**
     * Execute method of service
     */
	async execute(name) {
		try {
			const company = await models.Company.findOne({
				where: { name },
			});
			return company;
		} catch (e) {
			return e.message;
		}
	}
}

module.exports = GetCompanyByNameService;
