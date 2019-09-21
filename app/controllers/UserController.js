const { Controller } = require("../libraries");
const ServiceFactory = require("../services");

/**
 * User Controller Related Methods
 */
class UserController extends Controller {
	/**
     * Users listing page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      uc.list();
     */
	list(req, res) {
		const userList = (new ServiceFactory()).create("UserListService");
		res.json({ msg: userList.execute() });
	}
}

module.exports = UserController;
