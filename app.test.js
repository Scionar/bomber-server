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
