const request = require("supertest");
const formurlencoded = require("form-urlencoded").default;

/**
 * Common Helper Related Methods
 */
class Helper {
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
	 * @param {string} token - auth token
     * @return {object}
     * @example
     *      helper.get("/home");
     */
	async get(routeUrl, token = "") {
		const response = await request(this.app)
			.get(`${this.routePrefix}${routeUrl}`)
			.set("auth_token", token);

		return response;
	}

	/**
     * Post
     * @param {string} routeUrl - route url
	 * @param {object} data - data to be passed
	 * @param {string} token - auth token
     * @return {object}
     * @example
     *      helper.post("/users", { firstName: "Nazmul" });
     */
	async post(routeUrl, data, token = "") {
		const response = await request(this.app)
			.post(`${this.routePrefix}${routeUrl}`)
			.send(formurlencoded(data))
			.set("auth_token", token)
			.set("Accept", "application/json");

		return response;
	}

	/**
     * Put
     * @param {string} routeUrl - route url
	 * @param {object} data - data to be passed
	 * @param {string} token - auth token
     * @return {object}
     * @example
     *      helper.put("/users/1", { firstName: "Nazmul" });
     */
	async put(routeUrl, data, token = "") {
		const response = await request(this.app)
			.put(`${this.routePrefix}${routeUrl}`)
			.send(formurlencoded(data))
			.set("auth_token", token)
			.set("Accept", "application/json");

		return response;
	}

	/**
     * Delete
     * @param {string} routeUrl - route url
	 * @param {string} token - auth token
     * @return {object}
     * @example
     *      helper.delete("/users/1");
     */
	async delete(routeUrl, token = "") {
		const response = await request(this.app)
			.delete(`${this.routePrefix}${routeUrl}`)
			.set("auth_token", token);

		return response;
	}

	/**
     * Get Auth token
     * @param {object} data - data to be passed
     * @param {string} token - auth token
     * @example
     *      helper.auth("/auth", { email: "nazmul.basher@gmail.com", password: "123" });
     */
	async auth(data) {
		const response = await this.post("/auth", data);

		return response.body.token;
	}
}

module.exports = Helper;
