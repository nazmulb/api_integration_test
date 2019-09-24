const app = require("./app");
const { Helper } = require("./tests/helpers");
const helper = new Helper(app);

const setupTests = async () => {
    beforeAll(async () => {
        await helper.run("NODE_ENV=test npm run db");
        await helper.run("NODE_ENV=test npm run migrate");
        await helper.run("NODE_ENV=test npm run seed");
    });
    
    beforeEach(async () => {
    });
    
    afterEach(async () => {
    });
    
    afterAll(async () => {
        await helper.run("NODE_ENV=test npm run db:drop");
    });
};

module.exports = setupTests();