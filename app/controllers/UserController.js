const bcrypt = require("bcrypt");

const { Controller } = require("../libraries");
const ServiceFactory = require("../services");

const config = require(`${__dirname}/../config`);

/**
 * User Controller Related Methods
 */
class UserController extends Controller {
	/**
     * Users listing page
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - all users
     * @example
     *      uc.list(req, res);
     */
	async list(req, res) {
		const uls = new ServiceFactory().create("UserListService");
		const userList = await uls.execute();

		res.json(userList);
	}

	/**
     * Create new user
     * @param {object} req - request object
     * @param {object} res - response object
     * @return {json} - newly created user
     * @example
     *      uc.create(req, res);
     */
	async create(req, res) {
		const cu = new ServiceFactory().create("CreateUserService");
		req.body.password = (req.body.password !== undefined && req.body.password !== "") ? await bcrypt.hash(req.body.password, parseInt(config.SALT_ROUNDS)) : null;
		const user = await cu.execute(req.body);

		res.status(201).json(user);
	}
}

module.exports = UserController;
