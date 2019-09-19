const Controller = require("./Controller");

/**
 * Index Controller Related Methods
 */
class IndexController extends Controller {
	/**
     * About page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      ic.about();
     */
	about(req, res) {
		res.json({ msg: "About Page" });
	}
}

module.exports = {
	IndexController,
	UserController: require("./UserController"),
	EmployeeController: require("./EmployeeController"),
};
