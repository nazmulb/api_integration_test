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
     * Create new employee
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - newly created employee
     * @example
     *      ec.create(req, res);
     */
	async create(req, res) {
		let cobj = new ServiceFactory().create("GetCompanyByNameService");
		let company = await cobj.execute(req.body.companyName);

		if (!company) {
			cobj = new ServiceFactory().create("CreateCompanyService");
			company = await cobj.execute(req.body.companyName);

			if (company.id === undefined || company.id === null) return res.status(404).json(company);
		}
		req.body.CompanyId = company.id;

		const uobj = new ServiceFactory().create("GetUserByIdService");
		const userFound = await uobj.execute(req.body.userId);

		if (!userFound) {
			return res.status(404).json(`Employee not found with id ${req.body.userId}`);
		}

		const obj = new ServiceFactory().create("CreateEmployeeService");
		const employee = await obj.execute(req.body);

		return res.status(201).json(employee);
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
