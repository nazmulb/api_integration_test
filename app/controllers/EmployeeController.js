const { Controller } = require("../libraries");
const ServiceFactory = require("../services");

/**
 * Employee Controller Related Methods
 */
class EmployeeController extends Controller {
	/**
     * Employees listing page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      ec.list();
     */
	async list(req, res) {
		const els = new ServiceFactory().create("EmployeeListService");
		const employeeList = await els.execute();

		res.json(employeeList);
	}
}

module.exports = EmployeeController;
