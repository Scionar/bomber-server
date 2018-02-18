const store = require('./store');

describe('Test statehandler', () => {
  test('It returns state', () => {
    expect(typeof store.getState()).toBe('object');
  });
});
