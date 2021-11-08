const request = require('supertest');
// const app = jest.mock('../../index');
const app = require('../../index');

afterAll(done => {
    done();
})

describe('Testing route: /api/:steamID', () => {
    let steamID = 76561198049183521
    let api_key = process.env.STEAM_API_KEY;
    let steamApiUrl = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + api_key + '&steamid=' + steamID + '&include_appinfo=true&format=json'

    test('Should return a statuscode of 200 when a correct steamId is supplied', async () => {
        return request(app).get('/api/' + steamID)
        .then((response) => {
            expect(response.statusCode).toEqual(200);
        });

    });

})
