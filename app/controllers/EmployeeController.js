const { Controller } = require("../libraries");

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
		res.json({ msg: "Employees Listing Page" });
	}
}

module.exports = EmployeeController;
