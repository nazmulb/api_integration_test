const app = require("../app");
const { Helper } = require("./helpers");
const helper = new Helper(app);
let token;

beforeAll(async () => {
    token = await helper.auth({ email: "nazmul.basher@gmail.com", password: "123" });
});

describe("User Routes", () => {
    test("Get all users without auth", async () => {
        const response = await helper.get("/users");
        expect(response.body).toEqual("Unauthorized: Missing or invalid auth token.");
        expect(response.statusCode).toBe(401);
    });

    test("Get all users", async () => {
        const response = await helper.get("/users", token);
        expect(response.body[0].firstName).toBe("Nazmul");
        expect(response.body[0].lastName).toBe("Basher");
        expect(response.body[0].email).toBe("nazmul.basher@gmail.com");
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("password");
        expect(typeof response.body).toBe('object');
        expect(response.body.length).toBe(1);
        expect(response.statusCode).toBe(200);
    });
});