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
	list(req, res) {
		const employeeList = (new ServiceFactory()).create("EmployeeListService");
		res.json({ msg: employeeList.execute() });
	}
}

module.exports = EmployeeController;
