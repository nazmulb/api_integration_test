const request = require("supertest");
const app = require("../app");

describe("Page Routes", () => {
    test("Home Page", async () => {
        const response = await request(app).get("/api/home");
        //console.log(response.body);
        expect(response.body.msg).toEqual("Welcome");
        expect(response.statusCode).toBe(200);
    });
    
    test("About Page", async () => {
        const response = await request(app).get("/api/about");
        expect(response.body.msg).toEqual("About Page");
        expect(response.statusCode).toBe(200);
    });
});