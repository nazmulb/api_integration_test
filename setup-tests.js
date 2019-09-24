const setupTests = async () => {
    beforeAll(async () => {
        console.log("beforeAll");
    });
    
    beforeEach(async () => {
        console.log("beforeEach");
    });
    
    afterEach(async () => {
        console.log("afterEach");
    });
    
    afterAll(async () => {
        console.log("afterAll");
    });
};

module.exports = setupTests();