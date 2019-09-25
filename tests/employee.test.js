const app = require("../app");
const { user, employee } = require("./data")
const { Helper } = require("./helpers");
const helper = new Helper(app);
let token;

describe("Employee Routes", () => {
    beforeAll(async () => {
        token = await helper.auth(user.user1);
    });

    test("Get all employees without auth", async () => {
        const response = await helper.get("/employees");
        expect(response.body).toEqual({ message: "Unauthorized: Missing or invalid auth token." });
        expect(response.statusCode).toBe(401);
    });

    test("Get all employees", async () => {
        const response = await helper.get("/employees", token);
        expect(response.body[0].designation).toBe(employee.employee1.designation);
        expect(response.body[0].joiningDate).toBe(employee.employee1.joiningDate);
        expect(response.body[0].User.firstName).toBe(user.user1.firstName);
        expect(response.body[0].User.lastName).toBe(user.user1.lastName);
        expect(response.body[0].User.email).toBe(user.user1.email);
        expect(response.body[0].Company.name).toBe(employee.employee1.companyName);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("UserId");
        expect(response.body[0]).toHaveProperty("CompanyId");
        expect(typeof response.body).toBe('object');
        expect(response.body.length).toBe(1);
        expect(response.statusCode).toBe(200);
    });

    test("Get employee by id 1", async () => {
        const response = await helper.get("/employees/1", token);
        expect(response.body.designation).toBe(employee.employee1.designation);
        expect(response.body.joiningDate).toBe(employee.employee1.joiningDate);
        expect(response.body.User.firstName).toBe(user.user1.firstName);
        expect(response.body.User.lastName).toBe(user.user1.lastName);
        expect(response.body.User.email).toBe(user.user1.email);
        expect(response.body.Company.name).toBe(employee.employee1.companyName);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("UserId");
        expect(response.body).toHaveProperty("CompanyId");
        expect(typeof response.body).toBe('object');
        expect(response.statusCode).toBe(200);
    });
});