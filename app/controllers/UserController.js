const Controller = require("./Controller");

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
		res.json({ msg: "Users Listing Page" });
	}
}

module.exports = UserController;
