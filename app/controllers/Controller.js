/**
 * Common Controller Related Methods
 */
class Controller {
	/**
     * Home page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      c.index();
     */
	index(req, res) {
		res.json({ msg: "Welcome" });
	}
}

module.exports = Controller;
