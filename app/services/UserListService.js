const { Service } = require("../libraries");

/**
 * User List Service Class
 */
class UserListService extends Service {
	/**
     * Execute method of service
     */
	execute() {
		return "Listing all the users";
	}
}

module.exports = UserListService;
