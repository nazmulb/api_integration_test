/**
 * Abstract Controller Class
 */
class Controller {
	/**
     * Abstract
     */
	constructor() {
		if (new.target === Controller) {
			throw new Error("Controller can't be instantiated directly.");
		}
	}

	/**
     * Home page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json}
     * @example
     *      c.index();
     */
	index(req, res) {
		return res.json({ msg: "Welcome" });
	}
}

module.exports = Controller;
