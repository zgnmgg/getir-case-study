const request = require('supertest')
const app = require('../app');

describe("POST", () => {
    it("should fail to send a request another api", async (done) => {
        const response = await request(app).get('/api/demo');
        expect(response.status).toBe(404)
        done()
    });

    it("should return an error if no values are sent in body", async (done) => {
        const response = await request(app).post('/api/records');
        expect(response.status).toBe(500)
        expect(response.body.code).toBe(100)
        expect(response.body.message).toBe('Missing parameters: startDate, endDate, minCount or maxCount.')
        done()
    });

    it("should return an error if minCount higher than mazCount", async (done) => {
        const response = await request(app)
            .post('/api/records')
            .send({
                startDate: "2016-01-26",
                endDate: "2018-02-02",
                minCount: 90,
                maxCount: 45
            });
        expect(response.status).toBe(500)
        expect(response.body.code).toBe(102)
        expect(response.body.message).toBe('MinCount must be smaller than maxCount')
        done()
    });

    it("should return an error if date type invalid", async (done) => {
        const response = await request(app)
            .post('/api/records')
            .send({
                startDate: 3232,
                endDate: true,
                minCount: 0,
                maxCount: 12
            });
        expect(response.status).toBe(500)
        expect(response.body.code).toBe(103)
        expect(response.body.message).toBe('Date format is not valid.(YYYY-MM-DD)')
        done()
    });

    it("should return an error if startDate higher than endDate", async (done) => {
        const response = await request(app)
            .post('/api/records')
            .send({
                startDate: "2021-01-26",
                endDate: "2018-02-02",
                minCount: 0,
                maxCount: 12
            });
        expect(response.status).toBe(500)
        expect(response.body.code).toBe(104)
        expect(response.body.message).toBe('StartDate must be smaller than endDate')
        done()
    });
    it("should filter records and return a success response", async (done) => {
        const response = await request(app)
            .post('/api/records')
            .send({
                startDate: "2016-01-26",
                endDate: "2018-02-02",
                minCount: 2700,
                maxCount: 3000
            });
        expect(response.status).toBe(200)
        expect(response.body.code).toBe(0)
        expect(response.body.msg).toBe('Success')
    });
});
