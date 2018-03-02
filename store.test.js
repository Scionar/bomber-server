const store = require('./store');

// Mock console log
global.console = { log: jest.fn() };

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

  test('State has status data', () => {
    expect(store.getState()).toHaveProperty('status');
  });

  test('Output state if DEBUG environemnt variable is set', () => {
    process.env.DEBUG = true;
    store.dispatch({ type: 'TEST' });
    expect(console.log.mock.calls.length).toBe(1);
    console.log.mockClear();
  });
});
