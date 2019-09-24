const app = require("../app");
const { JestHelper } = require("./helpers");
const jestHelper = new JestHelper(app);

describe("Page Routes", () => {
    test("Home Page", async () => {
        const response = await jestHelper.get("/home");
        expect(response.body.msg).toEqual("Welcome");
        expect(response.statusCode).toBe(200);
    });
    
    test("About Page", async () => {
        const response = await jestHelper.get("/about");
        expect(response.body.msg).toEqual("About Page");
        expect(response.statusCode).toBe(200);
    });
});