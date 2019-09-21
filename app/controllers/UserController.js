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
     *      uc.list(req, res);
     */
	async list(req, res) {
		const uls = new ServiceFactory().create("UserListService");
		const userList = await uls.execute();

		res.json(userList);
	}
}

module.exports = UserController;
