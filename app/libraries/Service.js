/**
 * Abstract Service Class
 */
class Service {
	/**
     * Abstract
     */
	constructor() {
		if (new.target === Service) {
			throw new Error("Service can't be instantiated directly.");
		}
	}

	/**
     * Execute method of service
     */
	execute() {}
}

module.exports = Service;
