const { Factory } = require("../libraries");

/**
 * Service Factory Class
 */
class ServiceFactory extends Factory {
	/**
     * Factory
     * @param {string} name - name of the class
     * @return {object}
     * @example
     *      sf.create("UserListService");
     */
	create(name) {
		const fileName = `${__dirname}/${(name)}.js`;
		let ClassName;

		try {
			ClassName = require(fileName);
			return new ClassName();
		} catch (error) {
			throw new Error(`${name} not found.`);
		}
	}
}

module.exports = ServiceFactory;
