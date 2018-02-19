const request = require('supertest');
const app = require('./app');
const store = require('./store');
const authentication = require('./helpers/authentication');

describe('Test root path', () => {
  test('It should response to GET request', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('Test /player path', () => {
  test('/player with post request should response with valid response', done => {
    const name = 'Mary';
    request(app)
      .post('/player')
      .send({
        name
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(200);

        // Compare reponse values to server state.
        const responseBody = response.body;
        const player = store
          .getState()
          .players.filter(current => current.name === name)[0];
        expect(responseBody.id).toBe(player.id);
        // Response auth is hashed version of server's clean auth key.
        expect(responseBody.auth).toBe(authentication.hash(player.auth));
        done();
      });
  });
});
