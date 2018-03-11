jest.mock('../events/movePlayer');
const request = require('supertest');
const store = require('../store');
const app = require('../app');
const authentication = require('../helpers/authentication');
const events = require('../events');
const actions = require('../actions');
const movePlayer = require('../events/movePlayer');
const data = require('../data');

describe('Player route', () => {
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
      movePlayer.mockClear();
    });

    test('/player/:id/move/up returns 200 with right auth and calls events.movePlayer once', done => {
      request(app)
        .put(`/player/${userId}/move/up`)
        .send({
          auth
        })
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(movePlayer).toHaveBeenCalledTimes(1);
          done();
        });
    });

    test('/player/:id/move/argh returns 422 with not valid direction and never calls events.movePlayer', done => {
      request(app)
        .put(`/player/${userId}/move/argh`)
        .send({
          auth
        })
        .then(response => {
          expect(response.statusCode).toBe(422);
          expect(movePlayer).toHaveBeenCalledTimes(0);
          done();
        });
    });

    test('/player/:id/move/up returns 401 with wrong auth and and never calls events.movePlayer', done => {
      request(app)
        .put(`/player/${userId}/move/up`)
        .send({
          auth: auth + 'a'
        })
        .then(response => {
          expect(response.statusCode).toBe(401);
          expect(movePlayer).toHaveBeenCalledTimes(0);
          done();
        });
    });

    test('/player/:id/up returns 422 if game is not running and give informative message. Also does not call events.movePlayer', done => {
      store.dispatch(actions.stopGame());
      request(app)
        .put(`/player/${userId}/move/up`)
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
          expect(movePlayer).toHaveBeenCalledTimes(0);
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
      movePlayer.mockClear();
    });

    test('/player/:id/move/up returns 422 move collides', done => {
      request(app)
        .put(`/player/${userId}/move/up`)
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
          expect(movePlayer).toHaveBeenCalledTimes(0);
          done();
        });
    });
  });
});
