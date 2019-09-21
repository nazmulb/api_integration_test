/**
 * Abstract Factory Class
 */
class Factory {
	/**
     * Abstract
     */
	constructor() {
		if (new.target === Factory) {
			throw new Error("Factory can't be instantiated directly.");
		}
	}

	/**
     * Factory
	 */
	create() {}
}

module.exports = Factory;
