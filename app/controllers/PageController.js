const { Controller } = require("../libraries");

/**
 * Page Controller Related Methods
 */
class PageController extends Controller {
	/**
     * About page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      pc.about();
     */
	about(req, res) {
		return res.json({ message: "About Page" });
	}
}

module.exports = PageController;
