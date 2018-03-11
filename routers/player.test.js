const request = require('supertest');
const store = require('../store');
const app = require('../app');
const authentication = require('../helpers/authentication');
const actions = require('../actions');

describe('Player route', () => {
  describe('Register', () => {
    beforeAll(() => {
      store.dispatch(actions.reset());
    });

    test('/player with post request gives valid success response', done => {
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
          const responseBody = response.body;
          const player = store
            .getState()
            .players.filter(current => current.name === name)[0];

          // Id is same as in state.
          expect(responseBody.id).toBe(player.id);

          // Response auth is hashed version of server's clean auth key.
          expect(responseBody.auth).toBe(authentication.hash(player.auth));
          done();
        });
    });
  });
});
