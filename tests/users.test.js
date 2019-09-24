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
        expect(response.body).toEqual({ message: "Unauthorized: Missing or invalid auth token." });
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

    test("Get user by id 1", async () => {
        const response = await helper.get("/users/1", token);
        expect(response.body.firstName).toBe("Nazmul");
        expect(response.body.lastName).toBe("Basher");
        expect(response.body.email).toBe("nazmul.basher@gmail.com");
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("password");
        expect(typeof response.body).toBe('object');
        expect(response.body.length).toBe(1);
        expect(response.statusCode).toBe(200);
    });

    test("Create new user", async () => {
        let response = await helper.post("/users", { firstName: "Nabil", lastName: "Al Noor", email: "nabil.al.noor@gmail.com", password: "565" }, token);
        expect(response.body.firstName).toBe("Nabil");
        expect(response.body.lastName).toBe("Al Noor");
        expect(response.body.email).toBe("nabil.al.noor@gmail.com");
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("password");
        expect(typeof response.body).toBe('object');
        expect(response.statusCode).toBe(201);

        response = await helper.get("/users", token);
        expect(response.body.length).toBe(2);
        expect(response.statusCode).toBe(200);
    });

    test("Update user id 1", async () => {
        let response = await helper.put("/users/1", { firstName: "Abul" }, token);
        expect(response.body.firstName).toBe("Abul");
        expect(typeof response.body).toBe('object');
        expect(response.statusCode).toBe(200);

        response = await helper.get("/users", token);
        expect(response.body.length).toBe(1);
        expect(response.statusCode).toBe(200);
    });

    test("Delete user id 1", async () => {
        let response = await helper.put("/users/1", token);
        expect(response.body).toEqual({ message: "User deleted" });
        expect(response.statusCode).toBe(200);

        response = await helper.get("/users", token);
        expect(response.body.length).toBe(0);
        expect(response.statusCode).toBe(200);
    });
});