const request = require('supertest');
const app = require('./app');

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
  test('/player with post request should response', done => {
    request(app)
      .post('/player')
      .send({
        name: 'Mary'
      })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(200);
        const responseBody = response.body;
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('auth');
        done();
      });
  });
});
