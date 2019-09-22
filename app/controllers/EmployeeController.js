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
     * @return {json} - all employees
     * @example
     *      ec.list(req, res);
     */
	async list(req, res) {
		const obj = new ServiceFactory().create("EmployeeListService");
		const employeeList = await obj.execute();

		return res.json(employeeList);
	}

	/**
     * View the employee by id
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - the employee details
     * @example
     *      ec.view(req, res);
     */
	async view(req, res) {
		const obj = new ServiceFactory().create("GetEmployeeByIdService");
		const employee = await obj.execute(req.params.id);
		if (employee) {
			return res.json(employee);
		}

		return res.status(404).json("Employee not found");
	}

	/**
     * Delete employee
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      ec.delete(req, res);
     */
	async delete(req, res) {
		const obj = new ServiceFactory().create("DeleteEmployeeService");
		const deleted = await obj.execute(req.params.id);

		if (deleted) {
			return res.json("Employee deleted");
		}

		return res.status(404).json("Employee not found");
	}
}

module.exports = EmployeeController;
