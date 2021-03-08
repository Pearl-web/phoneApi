const request = require("supertest")
const server = require("../../server")


describe('API server', () => {
    let api;
    let testPhone = {
        brand: 'Iphone100',
        color: 'green',
        price : 700
    };

    beforeAll(() => {
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
    
        console.log('Stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/phones').expect(200, done);
    });

    it('responds to post /phones with status 201', (done) => {
        request(api)
            .post('/phones')
            .send(testPhone)
            .expect(201)
            .expect({ message: `${testPhone.brand} successfully added to our collection.`}, done);
    });

});