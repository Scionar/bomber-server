jest.mock('../events/movePlayerUp');
const request = require('supertest');
const store = require('../store');
const app = require('../app');
const authentication = require('../helpers/authentication');
const events = require('../events');
const actions = require('../actions');
const movePlayerUp = require('../events/movePlayerUp');
const data = require('../data');

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

  describe('Move up', () => {
    let auth;
    let userId;

    beforeEach(() => {
      store.dispatch(actions.reset());
      store.dispatch(actions.createPlayer('John'));
      store.dispatch(actions.setBoard(data.openBoard));
      events.startGame();
      auth = authentication.hash(store.getState().players[0].auth);
      userId = store.getState().players[0].id;
      movePlayerUp.mockClear();
    });

    test('/player/:id/up returns 200 with right auth and calls events.movePlayerUp once', done => {
      request(app)
        .post(`/player/${userId}/up`)
        .send({
          auth
        })
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(movePlayerUp).toHaveBeenCalledTimes(1);
          done();
        });
    });

    test('/player/:id/up returns 401 with wrong auth and and never calls events.movePlayerUp', done => {
      request(app)
        .post(`/player/${userId}/up`)
        .send({
          auth: auth + 'a'
        })
        .then(response => {
          expect(response.statusCode).toBe(401);
          expect(movePlayerUp).toHaveBeenCalledTimes(0);
          done();
        });
    });

    test('/player/:id/up returns 422 if game is not running and give informative message. Also does not call events.movePlayerUp', done => {
      store.dispatch(actions.stopGame());
      request(app)
        .post(`/player/${userId}/up`)
        .send({
          auth
        })
        .then(response => {
          expect(response.statusCode).toBe(422);
          const responseBody = response.body;
          expect(responseBody).toEqual(
            expect.objectContaining({
              error: expect.any(String)
            })
          );
          expect(movePlayerUp).toHaveBeenCalledTimes(0);
          done();
        });
    });
  });

  // Under own describe because setting closed board after gameStart() gives problems.
  describe('Move up with wall on the way', () => {
    let auth;
    let userId;

    beforeEach(() => {
      store.dispatch(actions.reset());
      store.dispatch(actions.createPlayer('John'));
      store.dispatch(actions.setBoard(data.closedBoard));
      events.startGame();
      auth = authentication.hash(store.getState().players[0].auth);
      userId = store.getState().players[0].id;
      movePlayerUp.mockClear();
    });

    test('/player/:id/up returns 422 move collides', done => {
      request(app)
        .post(`/player/${userId}/up`)
        .send({
          auth
        })
        .then(response => {
          expect(response.statusCode).toBe(422);
          const responseBody = response.body;
          expect(responseBody).toEqual(
            expect.objectContaining({
              error: expect.any(String)
            })
          );
          expect(movePlayerUp).toHaveBeenCalledTimes(0);
          done();
        });
    });
  });
});
