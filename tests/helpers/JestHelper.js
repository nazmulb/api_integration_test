const request = require("supertest");
const formurlencoded = require("form-urlencoded").default;

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
     * Get
     * @param {string} routeUrl - route url
     * @return {object}
     * @example
     *      jestHelper.get("/home");
     */
	async get(routeUrl) {
		const response = await request(this.app).get(`${this.routePrefix}${routeUrl}`);

		return response;
	}

	/**
     * Post
     * @param {string} routeUrl - route url
	 * @param {object} data - data to be passed
     * @return {object}
     * @example
     *      jestHelper.post("/users", { firstName: "Nazmul" });
     */
	async post(routeUrl, data) {
		const response = await request(this.app).post(`${this.routePrefix}${routeUrl}`).send(formurlencoded(data)).set("Accept", "application/json");

		return response;
	}

	/**
     * Put
     * @param {string} routeUrl - route url
	 * @param {object} data - data to be passed
     * @return {object}
     * @example
     *      jestHelper.put("/users/1", { firstName: "Nazmul" });
     */
	async put(routeUrl, data) {
		const response = await request(this.app).put(`${this.routePrefix}${routeUrl}`).send(formurlencoded(data)).set("Accept", "application/json");

		return response;
	}

	/**
     * Delete
     * @param {string} routeUrl - route url
     * @return {object}
     * @example
     *      jestHelper.delete("/users/1");
     */
	async delete(routeUrl) {
		const response = await request(this.app).delete(`${this.routePrefix}${routeUrl}`);

		return response;
	}
}

module.exports = JestHelper;
