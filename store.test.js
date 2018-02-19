const store = require('./store');

describe('Statehandler', () => {
  test('It returns state', () => {
    expect(typeof store.getState()).toBe('object');
  });

  test('State has board data', () => {
    expect(store.getState()).toHaveProperty('board');
  });

  test('State has players data', () => {
    expect(store.getState()).toHaveProperty('players');
  });
});
