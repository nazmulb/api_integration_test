const app = require("../app");
const { Helper } = require("./helpers");
const helper = new Helper(app);

describe("Page Routes", () => {
    test("Home Page", async () => {
        const response = await helper.get("/home");
        expect(response.body).toEqual({ message: "Welcome" });
        expect(response.statusCode).toBe(200);
    });
    
    test("About Page", async () => {
        const response = await helper.get("/about");
        expect(response.body).toEqual({ message: "About Page" });
        expect(response.statusCode).toBe(200);
    });
});