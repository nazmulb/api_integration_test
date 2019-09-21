const { Service } = require("../libraries");

/**
 * Employee List Service Class
 */
class EmployeeListService extends Service {
	/**
     * Execute method of service
     */
	execute() {
		return "Listing all the employees";
	}
}

module.exports = EmployeeListService;
