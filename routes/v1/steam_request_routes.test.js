const request = require('supertest');
const index = require('../../index');

afterAll(done => {
    index.closeServer();
    done();
})

describe('Testing route: /api/:steamID', () => {
    let steamID = 76561198049183521
    let api_key = process.env.STEAM_API_KEY;
    let requestUrl = '/api/' + steamID;
    let badRequestUrl = '/api/ajdiawjdawmklcmliawjd'

    test('Should return a statuscode of 200 when a correct steamID is supplied', () => {
        return request(index.app).get(requestUrl)
            .then((response) => {
                expect(response.statusCode).toEqual(200);
            });
    });

    test('Should return a 404 when an incorrect steamID is supplied', () => {
        return request(index.app).get(badRequestUrl)
            .then((response) => {
                expect(response.statusCode).toEqual(404);
            })
    })
})
