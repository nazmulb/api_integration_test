const request = require("supertest");

/**
 * Common Jest Helper Related Methods
 */
class JestHelper {
	/**
     * Initialize
	 * @param {Express} app - app object
     */
	constructor(app) {
		this.app = app;
		this.routePrefix = "/api";
	}

	/**
     * Count letter
     * @param {string} routeUrl - route url
     * @return {object}
     * @example
     *      jh.get("/home");
     */
	async get(routeUrl) {
		const response = await request(this.app).get(`${this.routePrefix}${routeUrl}`);

		return response;
	}
}

module.exports = JestHelper;
