const store = require('../store');
const actions = require('../actions');
const getPlayerWithId = require('./getPlayerWithId');

describe('GetPlayerWithId helper', () => {
  let stateId;

  beforeEach(() => {
    store.dispatch(actions.reset());
    store.dispatch(actions.createPlayer('John'));
    stateId = store.getState().players[0].id;
    store.dispatch(actions.createPlayer('Mary'));
    store.dispatch(actions.createPlayer('Gary'));
  });

  test('Returns right user', () => {
    expect(getPlayerWithId(stateId).name).toBe('John');
  });

  test('Returns null if user not found', () => {
    expect(getPlayerWithId(9999999)).toBe(null);
  });
});
