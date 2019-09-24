const app = require("../app");
const { user } = require("./data")
const { Helper } = require("./helpers");
const helper = new Helper(app);
let token;

describe("User Routes", () => {
    beforeAll(async () => {
        token = await helper.auth(user.user1);
    });

    test("Get all users without auth", async () => {
        const response = await helper.get("/users");
        expect(response.body).toEqual({ message: "Unauthorized: Missing or invalid auth token." });
        expect(response.statusCode).toBe(401);
    });

    test("Get all users", async () => {
        const response = await helper.get("/users", token);
        expect(response.body[0].firstName).toBe(user.user1.firstName);
        expect(response.body[0].lastName).toBe(user.user1.lastName);
        expect(response.body[0].email).toBe(user.user1.email);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("password");
        expect(typeof response.body).toBe('object');
        expect(response.body.length).toBe(1);
        expect(response.statusCode).toBe(200);
    });

    test("Get user by id 1", async () => {
        const response = await helper.get("/users/1", token);
        expect(response.body.firstName).toBe(user.user1.firstName);
        expect(response.body.lastName).toBe(user.user1.lastName);
        expect(response.body.email).toBe(user.user1.email);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("password");
        expect(typeof response.body).toBe('object');
        expect(response.statusCode).toBe(200);
    });

    test("Create new user", async () => {
        let response = await helper.post("/users", user.user2, token);
        expect(response.body.firstName).toBe(user.user2.firstName);
        expect(response.body.lastName).toBe(user.user2.lastName);
        expect(response.body.email).toBe(user.user2.email);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("password");
        expect(typeof response.body).toBe('object');
        expect(response.statusCode).toBe(201);

        response = await helper.get("/users", token);
        expect(response.body.length).toBe(2);
        expect(response.statusCode).toBe(200);
    });

    test("Update user id 1", async () => {
        const response = await helper.put("/users/1", { firstName: user.user3.firstName }, token);
        expect(response.body.firstName).toBe(user.user3.firstName);
        expect(typeof response.body).toBe('object');
        expect(response.statusCode).toBe(200);
    });

    test("Delete user id 1", async () => {
        let response = await helper.post("/users", user.user3, token);
        expect(response.body).toHaveProperty("id");
        
        response = await helper.delete("/users/"+response.body.id, token);
        expect(response.body).toEqual({ message: "User deleted" });
        expect(response.statusCode).toBe(200);
    });
});