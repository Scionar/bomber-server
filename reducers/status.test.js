const statusReducer = require('./status');

describe('Status reducer', () => {
  test('START_GAME sets running to true', () => {
    const action = {
      type: 'START_GAME'
    };
    expect(statusReducer(undefined, action)).toHaveProperty('running', true);
  });

  test('STOP_GAME sets running to false', () => {
    const state = { running: true };
    const action = {
      type: 'STOP_GAME'
    };
    expect(statusReducer(state, action)).toHaveProperty('running', false);
  });
});
