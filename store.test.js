const store = require('./store');
const actions = require('./actions');

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

  test('Reset state with RESET action', () => {
    // Set data
    store.dispatch(actions.createPlayer('Tero'));
    store.dispatch(
      actions.setBoard({
        height: 2,
        width: 2,
        cells: [1, 1, 1, 1],
        startPoints: [{ y: 0, x: 0 }, { y: 1, x: 1 }]
      })
    );
    store.dispatch(actions.startGame());

    store.dispatch(actions.reset());
    expect(store.getState()).toEqual(
      expect.objectContaining({
        board: {},
        players: [],
        status: { running: false }
      })
    );
  });
});
